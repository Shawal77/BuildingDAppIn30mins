'reach 0.1';
'use strict';

export const main = Reach.App(()=>{
    const D = Participant('Admin',{
        price:UInt,
        deadline:UInt,
    });
    const A = API('Attendee',{
        iWillGo: Fun([],Bool),
    });
    const C = API('CheckIn',{
        theyCame: Fun([Address],Bool),
        timesUp: Fun([],Bool),
    });
    init();

    D.only(()=>{
        const price=declassify(interact.price);
        const deadline=declassify(interact.deadline);
    });
    D.publish(price,deadline);

    const RSVPs = new Map(Object({
        came:Bool,
    }));

    const [keepGoing,howMany]=
        parallelReduce([true,0])
          .define(()=>{

          })
          .invariant(
              true
              && balance()==howMany*price
              && RSVPs.size()==howMany
          )
          .api(A.iWillGo,
                ()=>{
                    //asumptions that must be true to call iwilgo
                    //check if this person isn't part of rsvp
                    check(isNone(RSVPs[this]),"they haven't been RSVPed");
                },
                ()=>price,
                (k)=>{
                    check(isNone(RSVPs[this]),"they haven't been RSVPed");
                    RSVPs[this]={came:false};
                    k(true);
                    //actually store that the y are rsvping
                    return [keepGoing,howMany+1];
                }
            )
            .api(C.theyCame,
                (who)=>{
                    check(isSome(RSVPs[who]),"they RSVPd");
                    check(this==D,"You're the boss");
                },
                (_)=>0,
                (who,k)=>{
                    check(isSome(RSVPs[who]),"they RSVPd");
                    check(this==D,"You're the boss"); 
                    transfer(price).to(who);
                    delete RSVPs[who];
                    k(true);
                    return[keepGoing,howMany-1];
                })
          .while(keepGoing)
          .timeout(absoluteTime(deadline),()=>{
              const [[],k]=call(C.timesUp);
              k(true)
              return [false,howMany]
          });
          const leftovers=howMany;
        

    transfer(leftovers*price).to(D);
    commit();

    exit();
    
});