var uuid = require('node-uuid');

//broker fake api data
var existingPolicyData = require('./brexistingPolicyFake');
var newPolicyData = require('./brnewPolicyFake');
var myPolicyData = require('./brMyPoliciesFake');

var memberFakeData = require('./memberFakeData');
var csrListLogFake = require('./csrListLogFake');
var csrLogFake = require('./csrLogFake');
var csrMemberFakeData = require('./csrMemberFakeData');
var cmConfiguration = require('./cmConfiguration');
var myTasksFakeData = require('./myTasksFakeData');
var csrVerificationQuestions = require('./csrVerificationQuestions');
var configurationFakeData = require('./configurationFakeData');
var accountQuestionsFakeData = require('./accountQuestionsFakeData');
var questionsFakeData = require('./questionsFakeData');
var leadQuestionsFakeData = require('./leadQuestionsFakeData');
var electionsFakeData = require('./electionsFakeData')
var userInfo = require('./userInfo');
var userSelf = require('./userSelf');
var userCases = require('./userCases');
var hrinyAgents = require('./hrinyAgents');
var Contact = require('./Contact');
var relatedContacts = require('./relatedContacts');
var contact1Cases = require('./contact1Cases');
var contact2Cases = require('./contact2Cases');
var GetLead = require('./GetLead');

module.exports = [{
    path: '/account/login/',
    fn: function(req, res) {
        setTimeout(function() {
            if (req.body.username === 'pfadmpp' && req.body.password === 'pfadmpp') {
                var newToken = uuid.v4();
                // logedInUsers.push({username:req.body.username,
                //                    token:newToken})
                res.send({
                    token: newToken
                });
            } else {
                res.statusCode = 401;
                res.send(false);
            }
        }, 1000);
    }
}, {
    apiType: 'post',
    //
    path: '/api/dashboard/existingPolicies',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(existingPolicyData);
        }, 200);
    }
}, {
    apiType: 'post',
    //
    path: '/api/dashboard/myPolicies',
    fn: function (req, res) {
        setTimeout(function () {
            res.send(myPolicyData);
        }, 200);
    }
}, {
    apiType: 'post',
    //
    path: '/api/dashboard/newPolicies',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(newPolicyData);
        }, 200);
    }
}, {
    apiType: 'post',
    // /api/clients/{clientCode}/members/{memberId}/selected
    path: '/api/clients/:clientCode/members/:id/selected',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(true);
        }, 200);
    }
}, {
    apiType: 'get',
    // /api/clients/{clientCode}/members/{memberId}/verification/questions
    path: '/api/clients/:clientCode/members/:id/verification/questions',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(csrVerificationQuestions);
        }, 200);
    }
}, {
    apiType: 'post',
    path: '/api/clients/:clientCode/configuration',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(cmConfiguration);
        }, 200);
    }
}, {
    apiType: 'post',
    path: '/api/clients/:clientCode/members/query/basic',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(csrMemberFakeData);
        }, 200);
    }
}, {
    apiType: 'post',
    path: '/api/clients/:clientCode/members/query/advanced',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(csrMemberFakeData);
        }, 200);
    }
}, {
    apiType: 'get',
    path: '/api/clients/:clientCode/agents/:id/cases/pending',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(myTasksFakeData);
        }, 1000);
    }
}
, {
    apiType: 'get',
    path: '/api/clients/CELA/contacts/:id/relatedcontacts',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(relatedContacts);
        }, 2000);
    }
}
, {
    apiType: 'get',
    path: '/api/clients/CELA/contacts/003e000000QSsVgAAL/cases',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(contact1Cases);
        }, 1000);
    }
}

, {
    apiType: 'get',
    path: '/api/clients/CELA/contacts/003e000000QSsVgABC/cases',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(contact2Cases);
        }, 1000);
    }
}

, {    apiType: 'get',
    path: '/api/clients/CELA/contacts/:id',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(Contact);
        }, 1000);
    }
}

, {
    apiType: 'get',
    path: '/api/clients/CELA/agents/self',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(userSelf);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/agents',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(CELAAgents);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/users/:id',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(userInfo);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/leads/:id/questions',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(leadQuestionsFakeData);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/Accounts/:id/cases',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(contact1Cases);
        }, 1000);
    }
// }, {
//     apiType: 'get',
//     path: '/api/clients/CELA/groups/:id/questions',
//     fn: function(req, res) {
//         setTimeout(function() {
//             res.send(accountQuestionsFakeData);
//         }, 1000);
//     }
// }, {
//     apiType: 'get',
//     path: '/api/clients/CELA/accounts/:id/questions',
//     fn: function(req, res) {
//         setTimeout(function() {
//             res.send(accountQuestionsFakeData);
//         }, 1000);
//     }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/members/:id/questions',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(questionsFakeData);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/configuration',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(configurationFakeData);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/groups/:id/questions',
    // path: 'api/clients/CELA/groups/:id',
    fn: function(req, res) {
        setTimeout(function() {
            res.send([{"QuestionCode":"ADMIN_GROUPNAME","Answer":"Sunny Farms"},{"QuestionCode":"ADMIN_EIN","Answer":"43204938"},{"QuestionCode":"ADMIN_NAME","Answer":"Fannie Mae"}]);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/Leads/:id/cases',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(userCases);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/Leads/:id',
    fn: function (req, res) {
        setTimeout(function () {
            res.send(GetLead);
        }, 1000);
    }
}
, {
    apiType: 'put',
    path: '/api/clients/CELA/contacts/:id/cases/:caseId',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(myTasksFakeData);
        }, 1000);
    }
}, {
    apiType: 'put',
    path: '/api/clients/CELA/contacts/:id/cases/:caseId/comments/:commentId',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(myTasksFakeData);
        }, 1000);
    }
},{
    apiType: 'get',
    path: '/api/clients/CELA/contacts/:id/cases',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(userCases);
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/accounts/:id/groupadministrators',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(
                [{
                    Id: "003e000000Q5XGmAAN",
                    AccountId: "001e000000SsHRlAAN",
                    GroupId: 'Y1234244',
                    FirstName: null,
                    LastName: "Test Last Name",
                    SocialSecurityNumber: null,
                    Birthdate: null,
                    ContactRole: "Primary Group Admin",
                    MemberNumber: "Y34567800",
                    ExchangeNumber: null,
                    Email: null,
                    HomePhone: null,
                    MobilePhone: null,
                    Phone: null,
                    OtherPhone: null
                }]
            );
        }, 1000);
    }
}, {
    apiType: 'get',
    path: '/api/clients/CELA/contacts/:id/',
    fn: function(req, res) {
        setTimeout(function() {
            if (req.params.id === '67071') {
                res.send({
                    Id: "003e000000O0wLqAAJ",
                    AccountId: "001e000000QmZpyAAF",
                    GroupId: null,
                    FirstName: "Anthony",
                    LastName: "Salame",
                    SocialSecurityNumber: null,
                    Birthdate: "2/20/1958 12:00:00 AM",
                    ContactRole: null,
                    MemberNumber: "Y90957100",
                    ExchangeNumber: null,
                    Email: "tonysalame@aol.com",
                    HomePhone: null,
                    MobilePhone: "(905) 653-0280",
                    Phone: "(416) 241-0241",
                    OtherPhone: "(416) 555-0011"
                });
            } else {
                res.status(404);
                res.send('Not found');
                // res.status(500);
                // res.send({
                //     Message: "An error has occurred.",
                //     ExceptionMessage: "The reason phrase must not contain new-line characters.",
                //     ExceptionType: "System.FormatException",
                //     StackTrace: "   at System.Net.Http.HttpResponseMessage.set_ReasonPhrase(String value)\r\n   at Ariel.CaseManager.Web.Api.Infrastructure.CaseManagerExceptionFilterAttribute.DefaultHandler(Exception exception, HttpRequestMessage request) in c:\\Sources\\Ariel.CaseManager\\Ariel.CallCentre.Web.Api\\Infrastructure\\CaseManagerExceptionFilterAttribute.cs:line 58\r\n   at Ariel.CaseManager.Web.Api.Infrastructure.CaseManagerExceptionFilterAttribute.OnException(HttpActionExecutedContext actionExecutedContext) in c:\\Sources\\Ariel.CaseManager\\Ariel.CallCentre.Web.Api\\Infrastructure\\CaseManagerExceptionFilterAttribute.cs:line 94\r\n   at System.Web.Http.Filters.ExceptionFilterAttribute.OnExceptionAsync(HttpActionExecutedContext actionExecutedContext, CancellationToken cancellationToken)\r\n--- End of stack trace from previous location where exception was thrown ---\r\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\r\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\r\n   at System.Web.Http.Filters.ExceptionFilterAttribute.<ExecuteExceptionFilterAsyncCore>d__0.MoveNext()\r\n--- End of stack trace from previous location where exception was thrown ---\r\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\r\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\r\n   at System.Web.Http.Controllers.ExceptionFilterResult.<ExecuteAsync>d__0.MoveNext()\r\n--- End of stack trace from previous location where exception was thrown ---\r\n   at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)\r\n   at System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\r\n   at System.Runtime.CompilerServices.TaskAwaiter`1.GetResult()\r\n   at System.Web.Http.Dispatcher.HttpControllerDispatcher.<SendAsync>d__0.MoveNext()"
                // });
                // return false
            }
        }, 1000);
    }
}, {
    path: '/account/logoff/',
    fn: function(req, res) {
        setTimeout(function() {
            res.send({
                contacts: [{
                    MemberNumber: 'Y343456',
                    LastName: 'Fernandes',
                    FirstName: 'Rafael',
                    GroupName: 'Member',
                    // SocialSecurityNumber: '943666544-2',
                    EmployerIdentificationNumber: '123456789',
                    Phone: '647-680-7766',
                    Email: 'rafael.net.ca@gmail.com',
                    CaseNumber: '57032',
                    GroupId: 123456,
                    Birthdate: '09/10/1981',
                    ExchangeNumber: 234532,
                    ContactRole: 'Tester'
                }]
            });
        }, 1000);
    }
}, {
    path: 'api/getCurrentUser',
    fn: function(req, res) {
        res.send({
            callCenterContext: {
                code: 'CELA',
                name: 'New York'
            },
            clientSelected: 'N/A',
            eligibilitySet: [{
                id: 1,
                name: 'New York'
            }, {
                id: 2,
                name: 'California'
            }],
            userName: 'pfadminpp',
            firstName: 'Administrator',
            lastName: 'System'
        });
    }
}, {
    path: '/api/clients/CELA/leads',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(true);
        }, 1000);
    }
}, {
    path: '/api/clients/CELA/fastdirectory',
    fn: function(req, res) {
        setTimeout(function() {
            res.send(memberFakeData);
        }, 1000);
    }
}, {
    path: '/api/clients/CELA/directory',
    fn: function(req, res) {
        // String  Query  
        // String  MemberNumber    
        // String  LastName    
        // String  FirstName   
        // String  GroupName   
        // String  SocialSecurityNumber    
        // String  EmployerIdentificationNumber    
        // String  Phone   
        // String  Email   
        // String  CaseNumber  

        setTimeout(function() {
                if ((req.FirstName === 'Anthony')
                ||  req.firstName === 'Anthony') {
                    res.statusCode = 401;
                    res.send(false);
                } else {
                    res.send(memberFakeData);
                }
            }, 300);
    }
}, {
        apiType: 'get',
        // on ES: api/event/event/election/{0}/{1}/{2}/{3}", culture, clientCode, userId, employeeId
        path: '/api/event/event/election/:culture/:clientCode/:userId/:employeeId',
        fn: function(req, res) {
            setTimeout(function() {
                res.send(electionsFakeData.activityList);
            }, 1000);
        }
    }, {
        apiType: 'get',
        // on ES: api/event/event/detail/{0}/{1}/{2}/{3}/{4}", culture, clientCode, userId, eventLogId, employeeId
        path: '/api/event/event/detail/:culture/:clientCode/:userId/:eventLogId/:employeeId',
        fn: function(req, res) {
            setTimeout(function() {
                res.send(electionsFakeData.events[req.params.eventLogId]);
            }, 1000);
        }
    },  {
        apiType: 'get',
        // on ES: api/event/spdcertificationtask/detail/{0}/{1}/{2}/0/{3}/{4}", culture, clientCode, userId, employeeId, taskId
        path: '/api/event/spdcertificationtask/detail/:culture/:clientCode/:userId/:employeeId/:taskId',
        fn: function(req, res) {
          setTimeout(function() {
            res.send(electionsFakeData.spdTasks[req.params.taskId]);
          }, 1000);
        }
    }, {
        apiType: 'get',
        // on ES: api/profile/personalprofile/get/{0}/{1}/{2}/{3}/{4}", culture, clientCode, userId, employeeId, date
        path: '/api/profile/personalprofile/get/:culture/:clientCode/:userId/:employeeId/:date',
        fn: function(req, res) {
            setTimeout(function() {
                res.send(electionsFakeData.personalProfile);
            }, 1000);
        }
    }, {
        apiType: 'get',
        // on ES: api/event/beneficiary/coveragetypes/{0}/{1}/{2}/{3}/{4}", culture, clientCode, userId, eventLogId, employeeId
        path: '/api/event/beneficiary/coveragetypes/:culture/:clientCode/:userId/:eventLogId/:employeeId',
        fn: function(req, res) {
            setTimeout(function() {
                res.send(electionsFakeData.coverageTypes);
            }, 1000);
        }
    }];
