const cms = {
    "pages": [
        {
            "pageTitle": "Before we start",
            "title": "Making a claim online",
            "header": "Helping you get your property and things back to normal.",
            "sections": [
                {
                    "type": "header",
                    "content": [{"text": "Policy number  HADA204419687"}]
                },
                {
                    "title": "A few things first",
                    "header": "Claiming online is simple, quick and easy.",
                    "content": [
                        {
                            "list": {
                                "items" : [
                                    {"text":"Make a claim in as little as 20 minutes."},
                                    {"text":"Claim online any time  –  24 hours a day, 7 days a week."},
                                    {"text":"Fill in your details in one session. You can't pause and continue later."},
                                    {"text":"For Home Emergency Policies, you can't claim online.  Find out what you need to know."}
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "What you'll needt",
                    "content": [
                        {
                            "list": {
                                "itemIcon": "OK",
                                "items": [
                                    {"text":"Details of the claim such as what happened,  where, when and a list of items that have been lost, stolen or damaged."},
                                    {"text":"Your email address and telephone or mobile number."},
                                    {"text":"Proof to support your claim such us receipts, photos, videos etc. If you don't have them to hand, you can always upload some proof later. We'll email you a link you can use when you are ready."}
                                ]
                            }
                        }
                    ]                  
                },
                {
                    "title": "How it works",
                    "content": [
                        {
                            "list": {
                                "itemIcon": "Info",
                                "items": [
                                    {"text":"Tell us what happened and we'll calculate your policy excess  –  the amount you need to pay towards the claim. "},
                                    {"text":"We'll review the details you've submitted and let you know if you're covered and if the excess is correct."},
                                    {"text":"You'll need to upload some proof to support your claim."},
                                    {"text":"We'll settle your claim as quickly as we can if it's accepted."},
                                    {"text":"We might decide to repaire, replace, rebuild or give you a cash payment."}
                                ]
                            }
                        }
                    ],
                    "footer": "We might decide to send someone over to help you through the process, if needed."
                },
                {
                    "type": "footer",
                    "title": "If you don't want to claim online",
                    "header": "Calling",          
                    "content": [{"text":"If you prefer to speak to someone, please call us on 0345 300 0110,  8am - 6pm, Monday to Friday  and 9am - 1pm on Saturday."}]
                }
            ]
        }
    ]
}

const res = {};
function flatten(obj, prefix, acc) {
    // console.log("->", prefix, obj, acc)
    Object.entries(obj).forEach(en => {
        const key = en[0];
        const val = en[1];
        // console.log('en:', en)
        if (typeof val === 'string' || val instanceof String || val === null){
            acc[prefix + key] = val;
        } else {
            flatten(val, prefix + key + ".", acc)
        }
        // console.log(en);
        return en;
    });
}
flatten(cms, "", res);
console.log(res);
