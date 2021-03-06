describe("Mochamagix automated testing script", function ()
{
    mocha.setup({ignoreLeaks: true});
    this.timeout(10000);
    var max_count = 3;
    var time_interval = 1000;

        function set(bind, value) {
            it(bind + ' = "' + (value || "") + '" ', function (done) {
                setValue(bind, value, done);
            });
        }
        function get(bind, value) {
            it(bind + ' == "' + (value || "") + '" ', function (done) {
                getValue(bind, value, done);
            });
        }
        function click(event, value) {
            it("Click " + value + " ", function (done) {
                clickValue(value, done);
            });
        }
        function route(route) {
            it("Route " + route + " ", function (done) {
                top.controller.router.goToById(route);
                expect(top.controller.router.currentRoute.__id).to.equal(route);
                done()
            });
        }
        function setValue(bind, value, done, count) {
            if (typeof (count) == 'undefined')
                count = max_count;
            try {
                bindster.DOMSet({bind: bind, value: value});
                done();
            } catch (e) {
                if (count > 0)
                    setTimeout(function () {
                        setValue(bind, value, done, count--);
                    }, time_interval);
                else
                    expect(bind).to.equal('cannot find node with that bind string')
            }
        }
        function getValue(bind, value, done, count) {
            if (typeof (count) == 'undefined')
                count = max_count;
            try {
                expect(bindster.DOMGet({bind: bind}).toString()).to.equal(value || "");
                done();
            } catch (e) {
                if (count > 0)
                    setTimeout(function () {
                        getValue(bind, value, done, count--);
                    }, time_interval);
                else
                    expect(bind).to.equal('cannot find node with that bind string')
            }
        }
        function clickValue(value, done, count) {
            if (typeof (count) == 'undefined')
                count = max_count;
            try {
                bindster.DOMClick({action: value});
                done();
            } catch (e) {
                if (count > 0)
                    setTimeout(function () {
                        clickValue(value, done, count--);
                    }, time_interval);
                else
                    expect(value).to.equal('cannot find that action')
            }
        }
console.log("starting mocha script");
        route("public.needs");
get("'My age is'","My age is");
get("customer.primaryCustomer.age");
get("'My annual income is'","My annual income is");
get("customer.capitalNeeds.earnedIncome[0].amount");
get("'My ZIP code is'","My ZIP code is");
get("customer.primaryCustomer.address.zip");
get("'My gender is'","My gender is");
get("customer.primaryCustomer.gender");
get("customer.capitalNeeds.haveAnyDebts","true");
get("'My email address is (optional)'","My email address is (optional)");
get("needsController.email");
get("customer.profile.familyStatus","single");
set("customer.primaryCustomer.age","33");
get("customer.primaryCustomer.age","33");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
get("customer.capitalNeeds.earnedIncome[0].amount","$120,000");
set("customer.profile.familyStatus","singleparent");
get("customer.capitalNeeds.getCoverage(false)","$1,200,000");
get("customer.capitalNeeds.getTerm(false)","30");
get("'I have this many kids'","I have this many kids");
get("customer.profile.numberOfChildren","1");
get("customer.capitalNeeds.children[0].age","2");
get("customer.capitalNeeds.sendKidsToCollege","true");
get("customer.capitalNeeds.getTerm(false)","30");
get("customer.capitalNeeds.getTerm(false)","30");
get("customer.capitalNeeds.getCoverage(false)","$1,200,000");
get("customer.getCombinedCost()");
get("customer.profile.collegeType","inState4yr");
get("customer.getCombinedCost()","61.6");
click("if(needsController.validate()){route.public.dialog.health();}");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
set("customer.primaryCustomer.gender","female");
set("customer.profile.numberOfChildren","1");
set("customer.capitalNeeds.children[0].age","2");
set("needsController.email");
set("customer.primaryCustomer.age","33");
get("customer.primaryCustomer.age","33");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
get("customer.capitalNeeds.earnedIncome[0].amount","$120,000");
get("customer.primaryCustomer.gender","female");
set("customer.primaryCustomer.gender","female");
set("customer.profile.numberOfChildren","1");
get("customer.profile.numberOfChildren","1");
set("customer.capitalNeeds.children[0].age","2");
get("customer.capitalNeeds.children[0].age","2");
set("needsController.email");
get("needsController.email");
get("customer.primaryCustomer.gender","female");
set("customer.primaryCustomer.address.zip","12572");
click("if(needsController.validate()){route.public.dialog.health();}");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
set("customer.primaryCustomer.address.zip","12572");
set("customer.primaryCustomer.gender","female");
set("customer.profile.numberOfChildren","1");
set("customer.capitalNeeds.children[0].age","2");
set("needsController.email");
set("customer.primaryCustomer.age","33");
get("customer.primaryCustomer.age","33");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
get("customer.capitalNeeds.earnedIncome[0].amount","$120,000");
set("customer.primaryCustomer.address.zip","12572");
get("customer.primaryCustomer.gender","female");
set("customer.primaryCustomer.gender","female");
set("customer.profile.numberOfChildren","1");
get("customer.profile.numberOfChildren","1");
set("customer.capitalNeeds.children[0].age","2");
get("customer.capitalNeeds.children[0].age","2");
set("needsController.email");
get("needsController.email");
get("customer.primaryCustomer.gender","female");
get("customer.primaryCustomer.address.zip","12572");
get("customer.getCombinedCost()","66.15");
click("if(needsController.validate()){route.public.dialog.health();}");
set("customer.primaryCustomer.age","33");
set("customer.capitalNeeds.earnedIncome[0].amount","120000");
set("customer.primaryCustomer.address.zip","12572");
set("customer.primaryCustomer.gender","female");
set("customer.profile.numberOfChildren","1");
set("customer.capitalNeeds.children[0].age","2");
set("needsController.email");
route("public.dialog.health");
get("customer.primaryCustomer.age","33");
get("customer.capitalNeeds.earnedIncome[0].amount","$120,000");
get("customer.primaryCustomer.gender","female");
get("customer.profile.numberOfChildren","1");
get("customer.capitalNeeds.children[0].age","2");
get("needsController.email");
get("customer.primaryCustomer.healthClassNumberValues[0]","Fair");
get("customer.primaryCustomer.healthClassNumberValues[1]","Good");
get("customer.primaryCustomer.healthClassNumberValues[2]","Very Good");
get("customer.primaryCustomer.healthClassNumberValues[3]","Excellent");
get("{customer.primaryCustomer.healthClassNumberDescriptions[Math.round(controller.customer.primaryCustomer.healthClassNumber)]}","Your cholesterol and blood pressure are normal, you aren't overweight, and don't have any medical conditions. A picture of perfect health.  Congrats, you are part of the healthiest 20%.");
get("customer.primaryCustomer.smoker");
get("controller.customer.primaryCustomer.healthClassNumber","3");
get("customer.primaryCustomer.address.zip","12572");
click("needsController.healthSkip()");
route("public.selectquote");
get("coverageLevel","SILVER");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$900,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","20");
get("coverageLevelDetail","All your income until the kids are 21");
get("coverageLevelDetail","2 years of in-state college");
get("coverageLevel","GOLD");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$1,200,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("coverageLevelDetail","All your income until the kids are 25");
get("coverageLevelDetail","2 years of in-state college");
get("coverageLevel","PLATINUM");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$1,300,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("coverageLevelDetail","All your income until the kids are 25");
get("coverageLevelDetail","4 years of in-state college");
get("coverageLevel","SILVER");
get("coverageLevel","GOLD");
get("coverageLevel","PLATINUM");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$900,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","20");
get("coverageLevelDetail","All your income until the kids are 21");
get("coverageLevelDetail","2 years of in-state college");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$1,200,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("coverageLevelDetail","All your income until the kids are 25");
get("coverageLevelDetail","2 years of in-state college");
get("customer.capitalNeeds.getCoverage(false, coverageLevelIndex)","$1,300,000");
get("customer.capitalNeeds.getTerm(false, coverageLevelIndex)","30");
get("coverageLevelDetail","All your income until the kids are 25");
get("coverageLevelDetail","4 years of in-state college");
get("row.policies[0].monthly","69.73");
get("row.policies[0].monthly","79.28");
get("row.policies[0].monthly","114.71");
get("needsController.email");

console.log("ending mocha script");

    });


