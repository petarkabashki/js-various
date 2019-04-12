const JSON5 = require('json5')

const data = {
"pages.0.header": "Helping you get your property and things back to normal.",
"pages.0.pageTitle": "Before we start",
"pages.0.sections.0.content.0.text": "Policy number  HADA204419687",
"pages.0.sections.0.type": "header",
"pages.0.sections.1.content.0.list.items.0.text": "Make a claim in as little as 20 minutes.",
"pages.0.sections.1.content.0.list.items.1.text": "Claim online any time  â€“  24 hours a day, 7 days a week.",
"pages.0.sections.1.content.0.list.items.2.text": "Fill in your details in one session. You can't pause and continue later.",
"pages.0.sections.1.content.0.list.items.3.text": "For Home Emergency Policies, you can't claim online.  Find out what you need to know.",
"pages.0.sections.1.header": "Claiming online is simple, quick and easy.",
"pages.0.sections.1.title": "A few things first",
"pages.0.sections.2.content.0.list.itemIcon": "OK",
"pages.0.sections.2.content.0.list.items.0.text": "Details of the claim such as what happened,  where, when and a list of items that have been lost, stolen or damaged.",
"pages.0.sections.2.content.0.list.items.1.text": "Your email address and telephone or mobile number.",
"pages.0.sections.2.content.0.list.items.2.text": "Proof to support your claim such us receipts, photos, videos etc. If you don't have them to hand, you can always upload some proof later. We'll email you a link you can use when you are ready.",
"pages.0.sections.2.title": "What you'll needt",
"pages.0.sections.3.content.0.list.itemIcon": "Info",
"pages.0.sections.3.content.0.list.items.0.text": "Tell us what happened and we'll calculate your policy excess  â€“  the amount you need to pay towards the claim. ",
"pages.0.sections.3.content.0.list.items.1.text": "We'll review the details you've submitted and let you know if you're covered and if the excess is correct.",
"pages.0.sections.3.content.0.list.items.2.text": "You'll need to upload some proof to support your claim.",
"pages.0.sections.3.content.0.list.items.3.text": "We'll settle your claim as quickly as we can if it's accepted.",
"pages.0.sections.3.content.0.list.items.4.text": "We might decide to repaire, replace, rebuild or give you a cash payment.",
"pages.0.sections.3.footer": "We might decide to send someone over to help you through the process, if needed.",
"pages.0.sections.3.title": "How it works",
"pages.0.sections.4.content.0.text": "If you prefer to speak to someone, please call us on 0345 300 0110,  8am - 6pm, Monday to Friday  and 9am - 1pm on Saturday.",
"pages.0.sections.4.header": "Calling",
"pages.0.sections.4.title": "If you don't want to claim online",
"pages.0.sections.4.type": "footer",
"pages.0.title": "Making a claim online"
};

function expand(res, [keys, val]){
    const firstKey = Number.isInteger(keys[0]) ? Number.parseInt(keys[0]) : keys[0];
    if(keys.length === 1) {
        if(!isNaN(keys[0])) {
            res.push(val);
        } else {
            res[firstKey] = val;
        }        
    }
    else {
        if (res[firstKey] === undefined) {
            if (!isNaN([keys[1]])) {
                res[firstKey] = [];
            }
            else {
                res[firstKey] = {}
            }
        }
        // res[firstKey] = (res[firstKey] !== undefined ) && res[firstKey] || (Number.isInteger(keys[1]) ? [] : {});
        expand(res[firstKey], [keys.slice(1), val]);
    }
}


const res = {};
const dataEntries = Object.entries(data).map(([key,val]) => [key.split('.'), val]);
dataEntries.forEach(en => expand(res, en))
// expand(res, [["page", "1"], "blah"]);
console.log(JSON5.stringify(res, {space: 2}));
