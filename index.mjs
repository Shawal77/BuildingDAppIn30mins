import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const sbal = stdlib.parseCurrency(100);
const D = await stdlib.newTestAccount();

const deadline=15;

const ctcD = accD.contract(backend);

try{
    await ctcD.p.Admin({
        deadline,
        price: stdlib.parseCurrency(25),
        ready: ()=>{
            console.log('The contract is ready');
            throw 42;
        }
    });
} catch (e) {//catch error
    if (e !== 42) {
        throw e;
    }
}

const users = await stdlib.newTestAccounts(5,sbal);

const willError = async (f)=>{
    let e;
    try{
        await f();
        e=false;
    } catch (te) {
        e=te
    }
    if (e==false) {
        throw Error(`Expected to error, but didn't`);
    }
    console.log('that last call errored but thats okay');
}
const rsvp =async (whoi)=>{
    const who = users[whoi];
    const ctc = who.contract(backend,ctcD.getInfo());
    console.log('RSVP of',stdlib.formatAddress(who));
    await ctc,apis.Attendee.iWillGo();
};
const checkIn =async (whoi)=>{
    const who = users[whoi];
    console.log('Check in of',stdlib.formatAddress(who));
    await ctc,apis.checkIn.theyCame(who);
};
const timesUp =async ()=>{
    console.log('I think time is up');
    await ctc,apis.checkIn.timesUp();
};
//test scenario 
await rsvp(0);
await rsvp(1);
await rsvp(2);
await rsvp(4);
await willError(()=>rsvp(4));
await checkIn(4);
await checkIn(0);
await willError(()=>checkIn(3));
await checkIn(2);
await willError(()=>checkIn(2));

console.log('we are gonna wait for the deadline');
await stdlib.wait(deadline);

await timesUp();

for (const who of [accD,...users]) {
    console.log(stdlib.formatAddress(who),'has',
        stdlib.formatCurrency(await stdlib.balanceOf(who)));
}