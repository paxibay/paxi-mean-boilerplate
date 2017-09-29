module.exports = {
    "id": 372,
    "code": "CELA",
    "description": {
        "en-US": "Celanese",
        "fr-CA": "Celanese"
    },
    "memberVerification": {
        "usesSecurityCodes": true,
        "minAnswersForUnauthenticatedCallers": 0,
        "minAnswersForIvrAuthenticatedCallers": 2
    },
    "logTypes": [
        {
            "isAvailableToAgents": true,
            "id": 7,
            "code": "CALI",
            "isDefault": false,
            "description": {
                "en-US": "Incoming Call",
                "fr-CA": "Appel entrant"
            }
        },
        {
            "isAvailableToAgents": false,
            "id": 9,
            "code": "BOL",
            "isDefault": false,
            "description": {
                "en-US": "Benefits On Line Transaction",
                "fr-CA": "Opération sur Avantages en direct"
            }
        },
        {
            "isAvailableToAgents": true,
            "id": 10,
            "code": "CALO",
            "isDefault": false,
            "description": {
                "en-US": "Outgoing Call",
                "fr-CA": "Appel sortant"
            }
        },
        {
            "isAvailableToAgents": true,
            "id": 13,
            "code": "DOCI",
            "isDefault": false,
            "description": {
                "en-US": "Incoming Document",
                "fr-CA": "Document entrant"
            }
        },
        {
            "isAvailableToAgents": true,
            "id": 14,
            "code": "DOCO",
            "isDefault": false,
            "description": {
                "en-US": "Outgoing Document",
                "fr-CA": "Document sortant"
            }
        },
        {
            "isAvailableToAgents": true,
            "id": 15,
            "code": "SMTX",
            "isDefault": false,
            "description": {
                "en-US": "Satisfaction Metrics",
                "fr-CA": "Degré de satisfaction"
            }
        },
        {
            "isAvailableToAgents": false,
            "id": 35,
            "code": "MOB",
            "isDefault": false,
            "description": {
                "en-US": "Mobile Transaction",
                "fr-CA": "Transaction téléphone cellulaire"
            }
        },
        {
            "isAvailableToAgents": false,
            "id": 36,
            "code": "WEBP",
            "isDefault": false,
            "description": {
                "en-US": "Web Portal Transaction",
                "fr-CA": "Transaction à partir du portail des employés"
            }
        },
        {
            "isAvailableToAgents": false,
            "id": 37,
            "code": "SBC",
            "isDefault": false,
            "description": {
                "en-US": "SBC Transaction",
                "fr-CA": "Transaction SBC"
            }
        }
    ],
    "logCategories": [
        {
            "id": 264,
            "code": "GENERAL",
            "isDefault": false,
            "description": {
                "en-US": "General Inquiry",
                "fr-CA": "General Inquiry"
            }
        }
    ],
    "logDescriptions": [
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32239,
            "code": "0001",
            "isDefault": false,
            "description": {
                "en-US": "DB: Annual Statement Question",
                "fr-CA": "DB: Question sur relevé annuel"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32240,
            "code": "0002",
            "isDefault": false,
            "description": {
                "en-US": "DB: Assistance with forms",
                "fr-CA": "DB: Aide avec les formulaires"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32241,
            "code": "0003",
            "isDefault": false,
            "description": {
                "en-US": "DB: Beneficiary Questions",
                "fr-CA": "DB: Question concernant le bénéficiaire"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32243,
            "code": "0005",
            "isDefault": false,
            "description": {
                "en-US": "DB: Death Reported",
                "fr-CA": "DB: Décès"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32244,
            "code": "0006",
            "isDefault": false,
            "description": {
                "en-US": "DB: Termination Question",
                "fr-CA": "DB: Question de cessation"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32245,
            "code": "0007",
            "isDefault": false,
            "description": {
                "en-US": "DB: Leave of absence question",
                "fr-CA": "DB: Question congé autorisé"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32246,
            "code": "0008",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Question",
                "fr-CA": "DB: Question sur le QDRO"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32247,
            "code": "0009",
            "isDefault": false,
            "description": {
                "en-US": "DB: General Plan Question",
                "fr-CA": "DB: Question général concernant le régime"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32249,
            "code": "0011",
            "isDefault": false,
            "description": {
                "en-US": "DB: Request for annual statement",
                "fr-CA": "HCRA/DCRA Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32250,
            "code": "0012",
            "isDefault": false,
            "description": {
                "en-US": "DB: Request to Retire",
                "fr-CA": "DB: Demande de retraite"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32251,
            "code": "0013",
            "isDefault": false,
            "description": {
                "en-US": "DB: Disability Question",
                "fr-CA": "DB: Question sur l'invalidité"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32252,
            "code": "0014",
            "isDefault": false,
            "description": {
                "en-US": "DB: Pension Payment Question",
                "fr-CA": "DB: Question cheque de pension"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32253,
            "code": "0015",
            "isDefault": false,
            "description": {
                "en-US": "DB: Retirement Question",
                "fr-CA": "DB: Question sur la retraite"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32254,
            "code": "0045",
            "isDefault": false,
            "description": {
                "en-US": "Appeal - General",
                "fr-CA": "Appeal - General"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32255,
            "code": "0046",
            "isDefault": false,
            "description": {
                "en-US": "Appeal - New Hire Enrollment",
                "fr-CA": "Appeal - New Hire Enrollment"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32256,
            "code": "0047",
            "isDefault": false,
            "description": {
                "en-US": "Assistance with forms",
                "fr-CA": "Assistance with forms"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32257,
            "code": "0048",
            "isDefault": false,
            "description": {
                "en-US": "Claims Inquiry",
                "fr-CA": "Claims Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32258,
            "code": "0049",
            "isDefault": false,
            "description": {
                "en-US": "Coverage Inquiry",
                "fr-CA": "Coverage Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32259,
            "code": "0051",
            "isDefault": false,
            "description": {
                "en-US": "Enrollment Inquiry",
                "fr-CA": "Enrollment Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32260,
            "code": "0052",
            "isDefault": false,
            "description": {
                "en-US": "HCRA/DCRA Inquiry",
                "fr-CA": "HCRA/DCRA Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32261,
            "code": "0053",
            "isDefault": false,
            "description": {
                "en-US": "DCRA Reduction Inquiry",
                "fr-CA": "DCRA Reduction Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32262,
            "code": "0054",
            "isDefault": false,
            "description": {
                "en-US": "Beneficiary Inquiry",
                "fr-CA": "Beneficiary Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32263,
            "code": "0055",
            "isDefault": false,
            "description": {
                "en-US": "Card Inquiry",
                "fr-CA": "Card Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32264,
            "code": "0056",
            "isDefault": false,
            "description": {
                "en-US": "Change of personal information",
                "fr-CA": "Change of personal information"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32265,
            "code": "0057",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Inquiry - Eligbility",
                "fr-CA": "COBRA Inquiry - Eligibility"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32266,
            "code": "0058",
            "isDefault": false,
            "description": {
                "en-US": "COBRA  - Payments",
                "fr-CA": "COBRA Inquiry - Payments"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32267,
            "code": "0059",
            "isDefault": false,
            "description": {
                "en-US": "Death Notification",
                "fr-CA": "Death Notification"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32268,
            "code": "0060",
            "isDefault": false,
            "description": {
                "en-US": "Direct Bill Inquiry",
                "fr-CA": "Direct Bill Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32269,
            "code": "0061",
            "isDefault": false,
            "description": {
                "en-US": "HIPAA Certificate Request",
                "fr-CA": "HIPAA Certificate Request"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32270,
            "code": "0062",
            "isDefault": false,
            "description": {
                "en-US": "Life Insurance Inquiry",
                "fr-CA": "Life Insurance Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32271,
            "code": "0063",
            "isDefault": false,
            "description": {
                "en-US": "LTD/STD Inquiry",
                "fr-CA": "LTD/STD Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32272,
            "code": "0064",
            "isDefault": false,
            "description": {
                "en-US": "Password Inquiry",
                "fr-CA": "Password Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32273,
            "code": "0065",
            "isDefault": false,
            "description": {
                "en-US": "Deduction Inquir",
                "fr-CA": "Deduction Inquir"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32274,
            "code": "0066",
            "isDefault": false,
            "description": {
                "en-US": "Eligibility Audit",
                "fr-CA": "Eligibility Audit"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32275,
            "code": "0067",
            "isDefault": false,
            "description": {
                "en-US": "Referred EE to HR",
                "fr-CA": "Referred EE to HR"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32276,
            "code": "0068",
            "isDefault": false,
            "description": {
                "en-US": "Retirement Inquiry",
                "fr-CA": "Retirement Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32277,
            "code": "0069",
            "isDefault": false,
            "description": {
                "en-US": "TCS Inquiry",
                "fr-CA": "TCS Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32278,
            "code": "0070",
            "isDefault": false,
            "description": {
                "en-US": "Web Site Inquiry",
                "fr-CA": "Web Site Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32279,
            "code": "0071",
            "isDefault": false,
            "description": {
                "en-US": "Domestic Partner Inquiry",
                "fr-CA": "Domestic Partner Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32280,
            "code": "0072",
            "isDefault": false,
            "description": {
                "en-US": "Vendor Inquiry",
                "fr-CA": "Vendor Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32281,
            "code": "0073",
            "isDefault": false,
            "description": {
                "en-US": "Pre 2008 Benefit/HRIssue",
                "fr-CA": "Pre 2008 Benefit/HRIssue"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32282,
            "code": "0074",
            "isDefault": false,
            "description": {
                "en-US": "Certification Problem",
                "fr-CA": "Certification Problem"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32283,
            "code": "0076",
            "isDefault": false,
            "description": {
                "en-US": "Employee hang-up",
                "fr-CA": "Employee hang-up"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32284,
            "code": "0100",
            "isDefault": false,
            "description": {
                "en-US": "DB: Pension forecast questions",
                "fr-CA": "DB: Pension forecast questions"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32285,
            "code": "0101",
            "isDefault": false,
            "description": {
                "en-US": "SPECIAL CASE",
                "fr-CA": "SPECIAL CASE"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32286,
            "code": "0147",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Request for information",
                "fr-CA": "DB: QDRO Request for information"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32287,
            "code": "0148",
            "isDefault": false,
            "description": {
                "en-US": "DB: Death-General Questions",
                "fr-CA": "DB: Death-General Questions"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32288,
            "code": "0149",
            "isDefault": false,
            "description": {
                "en-US": "DB: Address Change",
                "fr-CA": "DB: Address Change"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32289,
            "code": "0151",
            "isDefault": false,
            "description": {
                "en-US": "DB: Lost or stolen check",
                "fr-CA": "DB: Lost or stolen check"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32290,
            "code": "0152",
            "isDefault": false,
            "description": {
                "en-US": "DB: Direct Deposit Question / Change",
                "fr-CA": "DB: Direct Deposit Question / Change"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32291,
            "code": "0200",
            "isDefault": false,
            "description": {
                "en-US": "DB: Process Appeal",
                "fr-CA": "DB: Process Appeal"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32292,
            "code": "0201",
            "isDefault": false,
            "description": {
                "en-US": "DB: Personal Profile Update",
                "fr-CA": "DB: Personal Profile Update"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32293,
            "code": "0202",
            "isDefault": false,
            "description": {
                "en-US": "DB: Tax Form Inquiry",
                "fr-CA": "DB: Tax Form Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32294,
            "code": "0203",
            "isDefault": false,
            "description": {
                "en-US": "DB: Disability Calculation Request",
                "fr-CA": "DB: Disability Calculation Request"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32295,
            "code": "0204",
            "isDefault": false,
            "description": {
                "en-US": "DB: Pension recalc- Social Security",
                "fr-CA": "DB: Pension recalc- Social Security"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32296,
            "code": "0205",
            "isDefault": false,
            "description": {
                "en-US": "DB: Calculation request follow-up",
                "fr-CA": "DB: Calculation request follow-up"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32297,
            "code": "0206",
            "isDefault": false,
            "description": {
                "en-US": "HR-Member Inquiry Phone",
                "fr-CA": "HR-Member Inquiry Phone"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32298,
            "code": "0207",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Inquiry",
                "fr-CA": "Dependent Audit Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46703,
            "code": "0235",
            "isDefault": false,
            "description": {
                "en-US": "DB:Meradosa Union",
                "fr-CA": "FR:DB:Meradosa Union"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46767,
            "code": "0236",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Address change request",
                "fr-CA": "CELCAN: Changement d’adresse"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46768,
            "code": "0237",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Assistance with forms",
                "fr-CA": "CELCAN: Assistance avec les formulaires"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46769,
            "code": "0238",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change Banking Information",
                "fr-CA": "CELCAN: Changement d’information bancaire"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46770,
            "code": "0239",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change / Confirmation (Name, DOB etc)",
                "fr-CA": "CELCAN: Changement/ Confirmation (Nom, DDN etc)"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46771,
            "code": "0240",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death – General Questions",
                "fr-CA": "CELCAN:Décès – Question générale"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46772,
            "code": "0241",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Reported",
                "fr-CA": "CELCAN:Avis de décès"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46773,
            "code": "0242",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN:EE Hang up",
                "fr-CA": "CELCAN:EE a raccroché"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46774,
            "code": "0243",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN:Follow-up on a request",
                "fr-CA": "CELCAN:Suivi d’une demande"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46775,
            "code": "0244",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Income tax Question",
                "fr-CA": "CELCAN: Impôt/ Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46776,
            "code": "0245",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Inquiries (Fax #, Tel#, address etc)",
                "fr-CA": "CELCAN:Demandes générales(#de fax,#tél,adresse)"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46777,
            "code": "0246",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Power of Attorney",
                "fr-CA": "CELCAN: Procuration"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46778,
            "code": "0247",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Supervisor Call",
                "fr-CA": "CELCAN: Appel au superviseur"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46779,
            "code": "0248",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Transfer (other)",
                "fr-CA": "CELCAN: Transfert (autre)"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46780,
            "code": "0249",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Transfer HR",
                "fr-CA": "CELCAN: Transfert au RH"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46781,
            "code": "0250",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Transfer Internal",
                "fr-CA": "CELCAN: Transfert interne"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46782,
            "code": "0251",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Beneficiary Question",
                "fr-CA": "CELCAN: Bénéficiaires/Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46783,
            "code": "0252",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Claim Inquiry",
                "fr-CA": "CELCAN: Réclamation/Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46784,
            "code": "0253",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Coordination of Benefits",
                "fr-CA": "CELCAN: Coordination des prestations"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46785,
            "code": "0254",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Coverage Inquiry",
                "fr-CA": "CELCAN: Couverture/Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46787,
            "code": "0256",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Drug Card",
                "fr-CA": "CELCAN: Carte Médicament"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46788,
            "code": "0257",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Enrolment Process",
                "fr-CA": "CELCAN: Adhésion"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46789,
            "code": "0258",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Flex Credit / HSA Inquiry",
                "fr-CA": "CELCAN: Crédits Flex / CGS Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46790,
            "code": "0259",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Leave of Absence Question",
                "fr-CA": "CELCAN: Congés Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46791,
            "code": "0260",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Provincial Health Inquiry",
                "fr-CA": "CELCAN: Couverture provinciale Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46792,
            "code": "0261",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Request for Benefits Confirmation Letter",
                "fr-CA": "CELCAN:Demande de confirmation écrite des protecti"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46793,
            "code": "0262",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Annual Statement Question",
                "fr-CA": "CELCAN PD : Relevé annuel – Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46794,
            "code": "0263",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Calculation Request",
                "fr-CA": "CELCAN PD: Demande pour un calcul"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46795,
            "code": "0264",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Divorce Question",
                "fr-CA": "CELCAN PD : Question sur le divorce"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46796,
            "code": "0265",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Enrolment Process",
                "fr-CA": "CELCAN PD : Question sur l’adhésion"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46797,
            "code": "0266",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Follow-up on a request",
                "fr-CA": "CELCAN PD: Suivi d’une demande"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46798,
            "code": "0267",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: General Plan Question",
                "fr-CA": "CELCAN PD : Question générale sur le régime"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46799,
            "code": "0268",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Leave of Absence Question",
                "fr-CA": "CELCAN PD : Question sur le congé"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46800,
            "code": "0269",
            "isDefault": false,
            "description": {
                "en-US": "MULTI Marriage Breakdown Inquiry",
                "fr-CA": "FR: MULTI Marriage Breakdown Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46801,
            "code": "0270",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Request for annual statement",
                "fr-CA": "CELCAN PD: Demande pour un relevé annuel"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46802,
            "code": "0271",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Retirement Package Question",
                "fr-CA": "CELCAN PD: Question sur la trousse de retraite"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46803,
            "code": "0272",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Termination Package Question",
                "fr-CA": "CELCAN PD: Question sur la trousse de terminaison"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46804,
            "code": "0273",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Lost or stolen check",
                "fr-CA": "CELCAN : Chèque perdu ou volé"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46805,
            "code": "0274",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Payroll Deduction Question",
                "fr-CA": "CELCAN: Déductions de paie / Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46806,
            "code": "0275",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Pension Payment Question",
                "fr-CA": "CELCAN: Paiement de rente / Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47012,
            "code": "0380",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Eligibility Question",
                "fr-CA": "CELCAN: Admissibilité Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47013,
            "code": "0381",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Transfer to DC",
                "fr-CA": "CELCAN: Transfer au CD"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47014,
            "code": "0382",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Transfer to RRSP",
                "fr-CA": "CELCAN: Transfer au REER"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47015,
            "code": "0383",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Overaged Dependent Question",
                "fr-CA": "CELCAN: Étudiant plein temps / Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47017,
            "code": "0385",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Changes to Benefits",
                "fr-CA": "CELCAN: Changement aux protections"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32299,
            "code": "0400",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Subsidy",
                "fr-CA": "COBRA Subsidy"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 53431,
            "code": "0500",
            "isDefault": false,
            "description": {
                "en-US": "Retiree Opt Out",
                "fr-CA": "Retiree Opt Out"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 58318,
            "code": "0509",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Reported – Spouse or Dependent",
                "fr-CA": "CELCAN: Death Reported – Spouse or Dependent"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 52443,
            "code": "990",
            "isDefault": false,
            "description": {
                "en-US": "Health Exchange Question",
                "fr-CA": "Health Exchange Question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32300,
            "code": "9999",
            "isDefault": false,
            "description": {
                "en-US": "Vendor Inquiry",
                "fr-CA": "Vendor Inquiry"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34325,
            "code": "HCRQ",
            "isDefault": false,
            "description": {
                "en-US": "Health Care Reform question",
                "fr-CA": "FR: Health Care Reform question"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32301,
            "code": "msd1",
            "isDefault": false,
            "description": {
                "en-US": "Misdirected Call",
                "fr-CA": "Misdirected Call"
            }
        },
        {
            "logTypeCode": "CALI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 67302,
            "code": "MVFY",
            "isDefault": false,
            "description": {
                "en-US": "Member Verfication",
                "fr-CA": "Vérification de l'appelant"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 57787,
            "code": "0121",
            "isDefault": false,
            "description": {
                "en-US": "Access to Annual Pension Statement",
                "fr-CA": "Accès au relevé annuel de retraite"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 57788,
            "code": "0122",
            "isDefault": false,
            "description": {
                "en-US": "Access to Pension Projection Tool",
                "fr-CA": "Accès à l'outil de projection de la rente"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 53394,
            "code": "ACCM",
            "isDefault": false,
            "description": {
                "en-US": "CMWEB - Web Site Access",
                "fr-CA": "CMWEB - Accès au site"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 48682,
            "code": "ACSR",
            "isDefault": false,
            "description": {
                "en-US": "Member login via self registration",
                "fr-CA": "Membre connecté via l'auto-enregistrement"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31277,
            "code": "ACSS",
            "isDefault": false,
            "description": {
                "en-US": "Web Site Access",
                "fr-CA": "Accès au site"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 54760,
            "code": "APPV",
            "isDefault": false,
            "description": {
                "en-US": "View Application data",
                "fr-CA": "View Application  data"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 35480,
            "code": "ARCH",
            "isDefault": false,
            "description": {
                "en-US": "Log archiving",
                "fr-CA": "Activité d'archivage"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31278,
            "code": "AUFM",
            "isDefault": false,
            "description": {
                "en-US": "nline Authorization Form Request",
                "fr-CA": "Demande de formulaire d’autorisation"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34254,
            "code": "BKIM",
            "isDefault": false,
            "description": {
                "en-US": "Banking Information Modification",
                "fr-CA": "FR:Banking Information Modification"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 50692,
            "code": "BMSK",
            "isDefault": false,
            "description": {
                "en-US": "Member unmasked login ID",
                "fr-CA": "Membre a démasqué ID de connexion"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 51697,
            "code": "BREG",
            "isDefault": false,
            "description": {
                "en-US": "Member is fully registered",
                "fr-CA": "Membre est inscrit"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 49687,
            "code": "BRID",
            "isDefault": false,
            "description": {
                "en-US": "Member retrieved login ID",
                "fr-CA": "Membre a récupéré ID de connexion"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31279,
            "code": "CHPA",
            "isDefault": false,
            "description": {
                "en-US": "Password Change by Administrator",
                "fr-CA": "Mot de passe modifié par l’administrateur"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31280,
            "code": "CHPI",
            "isDefault": false,
            "description": {
                "en-US": "Initial Password Change",
                "fr-CA": "Changement du mot de passe initial"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31281,
            "code": "CHPN",
            "isDefault": false,
            "description": {
                "en-US": "Password Change by Member",
                "fr-CA": "Mot de passe modifié par le participant"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 65244,
            "code": "CHQA",
            "isDefault": false,
            "description": {
                "en-US": "Employee login via challenge questions.",
                "fr-CA": "Connexion à l'aide des questions d'identification."
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 38037,
            "code": "DISC",
            "isDefault": false,
            "description": {
                "en-US": "Online privacy statement completed.",
                "fr-CA": "Déclaration de confidentialité terminée."
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31282,
            "code": "EMPW",
            "isDefault": false,
            "description": {
                "en-US": "Challenge Question Password Reset via Email",
                "fr-CA": "Questions d’ID-Mot de passe réinitialisé courriel"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32237,
            "code": "FPMT",
            "isDefault": false,
            "description": {
                "en-US": "Access to the Flexible Pension Modelling Tool",
                "fr-CA": "Access to the Flexible Pension Modelling Tool"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 64982,
            "code": "LKPI",
            "isDefault": false,
            "description": {
                "en-US": "Too many failed password attempts",
                "fr-CA": "Trop d’échecs de saisie du mot de passe"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 65245,
            "code": "LNKA",
            "isDefault": false,
            "description": {
                "en-US": "Employee login via change password email link",
                "fr-CA": "Connexion à l’aide du lien envoyé par courriel"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31283,
            "code": "MAPW",
            "isDefault": false,
            "description": {
                "en-US": "Challenge Question Reset",
                "fr-CA": "Questions d’ID-Mot de passe réinitialisé"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 45662,
            "code": "MEMX",
            "isDefault": false,
            "description": {
                "en-US": "Activation period expired",
                "fr-CA": "Période d'activation a expiré"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 45663,
            "code": "PINX",
            "isDefault": false,
            "description": {
                "en-US": "PIN expired",
                "fr-CA": "PIN a expiré"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 59922,
            "code": "PLNK",
            "isDefault": false,
            "description": {
                "en-US": "Change password link email",
                "fr-CA": "Changer de mot de passe e-mail lien"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 54758,
            "code": "PPRO",
            "isDefault": false,
            "description": {
                "en-US": "View Personal Profile",
                "fr-CA": "View Personal Profile"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32566,
            "code": "QA",
            "isDefault": false,
            "description": {
                "en-US": "Member online question",
                "fr-CA": "Member online question"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 54761,
            "code": "SDOC",
            "isDefault": false,
            "description": {
                "en-US": "Access Secure document management",
                "fr-CA": "Access Secure document management"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47675,
            "code": "SEAU",
            "isDefault": false,
            "description": {
                "en-US": "Security email address updated.",
                "fr-CA": "Sécurité adresse e-mail mis à jour."
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 54759,
            "code": "SESV",
            "isDefault": false,
            "description": {
                "en-US": "View Session data",
                "fr-CA": "View Session data"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31276,
            "code": "SSOA",
            "isDefault": false,
            "description": {
                "en-US": "Web Site Access via SSO",
                "fr-CA": "Web Site Access via SSO"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34253,
            "code": "TXEM",
            "isDefault": false,
            "description": {
                "en-US": "Tax Elections Modification",
                "fr-CA": "FR:Tax Elections Modification"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32238,
            "code": "WENT",
            "isDefault": false,
            "description": {
                "en-US": "New hire",
                "fr-CA": "New hire"
            }
        },
        {
            "logTypeCode": "BOL",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 66273,
            "code": "XCRD",
            "isDefault": false,
            "description": {
                "en-US": "Service code generated – DDS",
                "fr-CA": "Code de service généré – DDS"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32302,
            "code": "0016",
            "isDefault": false,
            "description": {
                "en-US": "DB: Annual Statement Question",
                "fr-CA": "DB: Question sur le relevé annuel"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32303,
            "code": "0017",
            "isDefault": false,
            "description": {
                "en-US": "DB: Assistance with forms",
                "fr-CA": "DB: Aide avec les formulaires"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32304,
            "code": "0018",
            "isDefault": false,
            "description": {
                "en-US": "DB: Beneficiary Question",
                "fr-CA": "DB: Question concernant le bénéficiaire"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32305,
            "code": "0019",
            "isDefault": false,
            "description": {
                "en-US": "DB: Death Reported",
                "fr-CA": "DB: Décès"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32306,
            "code": "0020",
            "isDefault": false,
            "description": {
                "en-US": "DB: Termination Question",
                "fr-CA": "DB: Question de cessation"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32307,
            "code": "0021",
            "isDefault": false,
            "description": {
                "en-US": "DB: Leave of absence question",
                "fr-CA": "DB: Question congé autorisé"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32308,
            "code": "0022",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Question",
                "fr-CA": "DB: Question QDRO"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32309,
            "code": "0023",
            "isDefault": false,
            "description": {
                "en-US": "DB: General Plan Question",
                "fr-CA": "DB: Question générale concernant le régime"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32310,
            "code": "0024",
            "isDefault": false,
            "description": {
                "en-US": "DB: Request to Retire",
                "fr-CA": "DB: Demande de retraite"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32311,
            "code": "0077",
            "isDefault": false,
            "description": {
                "en-US": "Incomplete/Missing Forms",
                "fr-CA": "Incomplete/Missing Forms"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32312,
            "code": "0078",
            "isDefault": false,
            "description": {
                "en-US": "Employee Contact",
                "fr-CA": "Employee Contact"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32313,
            "code": "0079",
            "isDefault": false,
            "description": {
                "en-US": "Manual Certification",
                "fr-CA": "Manual Certification"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32314,
            "code": "0080",
            "isDefault": false,
            "description": {
                "en-US": "Insurance Carrier Call",
                "fr-CA": "Insurance Carrier Call"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46636,
            "code": "0231",
            "isDefault": false,
            "description": {
                "en-US": "US Cela 24 hour Call Back",
                "fr-CA": "FR: US Cela 24 hour Call Back"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46637,
            "code": "0232",
            "isDefault": false,
            "description": {
                "en-US": "US  Cela 48 hour Call Back",
                "fr-CA": "FR: US  Cela 48 hour Call Back"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46638,
            "code": "0233",
            "isDefault": false,
            "description": {
                "en-US": "US Cela 5 day Call Back",
                "fr-CA": "FR: US Cela 5 day Call Back"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46639,
            "code": "0234",
            "isDefault": false,
            "description": {
                "en-US": "US Cela Other Call Back",
                "fr-CA": "FR: US Cela Other Call Back"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46807,
            "code": "0276",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Call to Member",
                "fr-CA": "CELCAN: Appel au participant"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46808,
            "code": "0277",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Call to HR",
                "fr-CA": "CELCAN: Appel au RH"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46809,
            "code": "0278",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Call to Provider",
                "fr-CA": "CELCAN: Appel au fournisseur"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46810,
            "code": "0279",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Call Request",
                "fr-CA": "CELCAN: Demande de rappel"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46811,
            "code": "0280",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Voice Message",
                "fr-CA": "CELCAN: Message boîte vocale"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46874,
            "code": "0343",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Call to Member",
                "fr-CA": "CELCAN PD: Appel au participant"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46875,
            "code": "0344",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Call to HR",
                "fr-CA": "CELCAN PD: Appel au RH"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46876,
            "code": "0345",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Call to Provider",
                "fr-CA": "CELCAN PD: Appel au fournisseur"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46877,
            "code": "0346",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Call Request",
                "fr-CA": "CELCAN PD: Demande de rappel"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46878,
            "code": "0347",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Voicemail Message",
                "fr-CA": "CELCAN PD: Message boîte vocale"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32315,
            "code": "0400",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Subsidy",
                "fr-CA": "COBRA Subsidy"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 53432,
            "code": "0501",
            "isDefault": false,
            "description": {
                "en-US": "Retiree Opt Out",
                "fr-CA": "Retiree Opt Out"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32316,
            "code": "211",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Follow Up Call",
                "fr-CA": "Dependent Audit Follow Up Call"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32317,
            "code": "348",
            "isDefault": false,
            "description": {
                "en-US": "DB: Outgoing Call",
                "fr-CA": "DB: Outgoing Call"
            }
        },
        {
            "logTypeCode": "CALO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32318,
            "code": "9999",
            "isDefault": false,
            "description": {
                "en-US": "Vendor Inquiry",
                "fr-CA": "Vendor Inquiry"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32319,
            "code": "0025",
            "isDefault": false,
            "description": {
                "en-US": "DB: Beneficiary Designation Form Received",
                "fr-CA": "DB: Formulaire de désignation de bénéficiaire reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32320,
            "code": "0026",
            "isDefault": false,
            "description": {
                "en-US": "DB: Complaint Letter",
                "fr-CA": "DB: Lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32321,
            "code": "0027",
            "isDefault": false,
            "description": {
                "en-US": "DB: Direct Deposit Authorisation",
                "fr-CA": "DB: Formulaire de dépôt direct"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32322,
            "code": "0028",
            "isDefault": false,
            "description": {
                "en-US": "DB: Letter from member received",
                "fr-CA": "DB: Lettre reçu du participant"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32323,
            "code": "0029",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Documents Received",
                "fr-CA": "DB: Documents QDRO reçus"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32324,
            "code": "0030",
            "isDefault": false,
            "description": {
                "en-US": "DB: Other form received",
                "fr-CA": "DB: Autre formulaire reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32325,
            "code": "0031",
            "isDefault": false,
            "description": {
                "en-US": "DB: Tax Election Form Received",
                "fr-CA": "DB: Formulaire choix d'impôt reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32326,
            "code": "0032",
            "isDefault": false,
            "description": {
                "en-US": "DB: Retirement Package Received",
                "fr-CA": "DB: Trousse de retraite reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32327,
            "code": "0033",
            "isDefault": false,
            "description": {
                "en-US": "DB: Termination Package Received",
                "fr-CA": "DB: Trousse de cessation reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32328,
            "code": "0034",
            "isDefault": false,
            "description": {
                "en-US": "DB: Death Package Received",
                "fr-CA": "DB: Trousse de décès reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32329,
            "code": "0081",
            "isDefault": false,
            "description": {
                "en-US": "Enrollment Form Received",
                "fr-CA": "Enrollment Form Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32330,
            "code": "0082",
            "isDefault": false,
            "description": {
                "en-US": "Birth Certificate Received",
                "fr-CA": "Birth Certificate Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32331,
            "code": "0083",
            "isDefault": false,
            "description": {
                "en-US": "QMCSO",
                "fr-CA": "QMCSO"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32332,
            "code": "0084",
            "isDefault": false,
            "description": {
                "en-US": "Written Appeal",
                "fr-CA": "Written Appeal"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32333,
            "code": "0085",
            "isDefault": false,
            "description": {
                "en-US": "Written Appeal",
                "fr-CA": "Written Appeal"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32334,
            "code": "0086",
            "isDefault": false,
            "description": {
                "en-US": "New Hire Appeal - Information",
                "fr-CA": "New Hire Appeal - Information"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32335,
            "code": "0087",
            "isDefault": false,
            "description": {
                "en-US": "New Hire Appeal - System Errors",
                "fr-CA": "New Hire Appeal - System Errors"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32336,
            "code": "0088",
            "isDefault": false,
            "description": {
                "en-US": "New Hire Appeal - Other",
                "fr-CA": "New Hire Appeal - Other"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32337,
            "code": "0089",
            "isDefault": false,
            "description": {
                "en-US": "Medicare Eligibility Info Received",
                "fr-CA": "Medicare Eligibility Info Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32338,
            "code": "0090",
            "isDefault": false,
            "description": {
                "en-US": "Handicapped Dependent Update",
                "fr-CA": "Handicapped Dependent Update"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32339,
            "code": "0091",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Information Change",
                "fr-CA": "COBRA Information Change"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32340,
            "code": "0092",
            "isDefault": false,
            "description": {
                "en-US": "Life Insurance Update",
                "fr-CA": "Life Insurance Update"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32341,
            "code": "0093",
            "isDefault": false,
            "description": {
                "en-US": "Legal Documentation",
                "fr-CA": "Legal Documentation"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32342,
            "code": "0094",
            "isDefault": false,
            "description": {
                "en-US": "LTD Waiver Form",
                "fr-CA": "LTD Waiver Form"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32343,
            "code": "0095",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Payment",
                "fr-CA": "COBRA Payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32344,
            "code": "0096",
            "isDefault": false,
            "description": {
                "en-US": "NSF Payment Received",
                "fr-CA": "NSF Payment Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32345,
            "code": "0097",
            "isDefault": false,
            "description": {
                "en-US": "QMCSO Inquiry",
                "fr-CA": "QMCSO Inquiry"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32346,
            "code": "0098",
            "isDefault": false,
            "description": {
                "en-US": "New Hire Appeal - Default",
                "fr-CA": "New Hire Appeal - Default"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32347,
            "code": "0099",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Employee Election",
                "fr-CA": "COBRA Employee Election"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32348,
            "code": "0100",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Dependent Election",
                "fr-CA": "COBRA Dependent Election"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32349,
            "code": "0101",
            "isDefault": false,
            "description": {
                "en-US": "COBRA EE Declination",
                "fr-CA": "COBRA EE Declination "
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32350,
            "code": "0102",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Dependent Declination",
                "fr-CA": "COBRA Dependent Declination"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32351,
            "code": "0103",
            "isDefault": false,
            "description": {
                "en-US": "Individual Release",
                "fr-CA": "Individual Release"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32352,
            "code": "0104",
            "isDefault": false,
            "description": {
                "en-US": "FMLA Decline Coverage",
                "fr-CA": "FMLA Decline Coverage"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32353,
            "code": "0105",
            "isDefault": false,
            "description": {
                "en-US": "Domestic Partner Affidavit",
                "fr-CA": "Domestic Partner Affidavit"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32354,
            "code": "0106",
            "isDefault": false,
            "description": {
                "en-US": "Domestic Partner Tax Status",
                "fr-CA": "Domestic Partner Tax Status"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32355,
            "code": "0107",
            "isDefault": false,
            "description": {
                "en-US": "Returned Mail",
                "fr-CA": "Returned Mail"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32356,
            "code": "0108",
            "isDefault": false,
            "description": {
                "en-US": "Internal Administrator Update",
                "fr-CA": "Internal Administrator Update"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32357,
            "code": "0147",
            "isDefault": false,
            "description": {
                "en-US": "DB: Proceed with retirement payment",
                "fr-CA": "DB: Proceed with retirement payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32358,
            "code": "0149",
            "isDefault": false,
            "description": {
                "en-US": "DB: Power of attorney",
                "fr-CA": "DB: Power of attorney"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32359,
            "code": "0150",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO proceed with calculation",
                "fr-CA": "DB: QDRO proceed with calculation"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32360,
            "code": "0151",
            "isDefault": false,
            "description": {
                "en-US": "DB: Proceed with death payment",
                "fr-CA": "DB: Proceed with death payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32361,
            "code": "0152",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Request for info received",
                "fr-CA": "DB: QDRO Request for info received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32362,
            "code": "0153",
            "isDefault": false,
            "description": {
                "en-US": "DB: E-mail received",
                "fr-CA": "DB: E-mail received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32363,
            "code": "0154",
            "isDefault": false,
            "description": {
                "en-US": "DB: Request for annual statement received",
                "fr-CA": "DB: Request for annual statement received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32364,
            "code": "0200",
            "isDefault": false,
            "description": {
                "en-US": "Other form/letter received",
                "fr-CA": "Other form/letter received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32365,
            "code": "0201",
            "isDefault": false,
            "description": {
                "en-US": "DB: E-mail received -2nd line",
                "fr-CA": "DB: E-mail received -2nd line"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32366,
            "code": "0202",
            "isDefault": false,
            "description": {
                "en-US": "DB: Proceed with termination payment",
                "fr-CA": "DB: Proceed with termination payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32367,
            "code": "0203",
            "isDefault": false,
            "description": {
                "en-US": "DB: Proceed with QDRO payment",
                "fr-CA": "DB: Proceed with QDRO payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32368,
            "code": "0204",
            "isDefault": false,
            "description": {
                "en-US": "DB: Proceed with disability payment",
                "fr-CA": "DB: Proceed with disability payment"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32369,
            "code": "0205",
            "isDefault": false,
            "description": {
                "en-US": "DB: Address change request",
                "fr-CA": "DB: Address change request"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32370,
            "code": "0206",
            "isDefault": false,
            "description": {
                "en-US": "HR-Member Inquiry (Email)",
                "fr-CA": "HR-Member Inquiry (Email)"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32371,
            "code": "0207",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Documentation",
                "fr-CA": "Dependent Audit Documentation"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46812,
            "code": "0281",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Address Change Received",
                "fr-CA": "CELCAN: Changement d’adresse reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46813,
            "code": "0282",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Beneficiary Designation Form Received",
                "fr-CA": "CAN:Formulaire de désignation de bénéficiaire reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46814,
            "code": "0283",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Complaint Letter",
                "fr-CA": "CELCAN: Lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46815,
            "code": "0284",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Enrolment / Change form",
                "fr-CA": "CELCAN: Formulaire d’adhésion/ modification"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46816,
            "code": "0285",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Package Received",
                "fr-CA": "CELCAN: Trousse de décès reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46817,
            "code": "0286",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Default Coverage",
                "fr-CA": "CELCAN: Protections par défaut"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46818,
            "code": "0287",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: E-mail received",
                "fr-CA": "CELCAN: Courriel reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46819,
            "code": "0288",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: EoI Received",
                "fr-CA": "CELCAN: Preuve d’assurabilité reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46820,
            "code": "0289",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: EoI Approved / EoI Refused",
                "fr-CA": "CELCAN: EOI Accepté / Refusé"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46821,
            "code": "0290",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: File Request",
                "fr-CA": "CELCAN: Demande de dossier"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46822,
            "code": "0291",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Future Dated Change/Enrolment form",
                "fr-CA": "CELCAN:Formulaire d’adhésion/modification avec dat"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46823,
            "code": "0292",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: IRREVOCABLE BENEFICIARY",
                "fr-CA": "CELCAN: BÉNÉFICIAIRE IRRÉVOCABLE"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46824,
            "code": "0293",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Letter From Member Received",
                "fr-CA": "CELCAN: Lettre du participant reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46825,
            "code": "0294",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Mail Returned",
                "fr-CA": "CELCAN: Courrier retourné"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46826,
            "code": "0295",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: MSP Form",
                "fr-CA": "CELCAN: Formulaire MSP"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46827,
            "code": "0296",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Overage Dependent Confirmation",
                "fr-CA": "CELCAN: Confirmation d’étudiant à plein temps"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46828,
            "code": "0297",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Other Form Received",
                "fr-CA": "CELCAN: Autre formulaire reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46829,
            "code": "0298",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Power of attorney Received",
                "fr-CA": "CELCAN: Procuration reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46830,
            "code": "0299",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Prepayment Cheque Received",
                "fr-CA": "CELCAN: Chèque de prépaiement reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46831,
            "code": "0300",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: RAMQ Option Form/ Letter",
                "fr-CA": "CELCAN: Lettre/ Formulaire RAMQ"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46832,
            "code": "0301",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: SPECIAL CASE",
                "fr-CA": "CELCAN: CAS SPÉCIAL"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46879,
            "code": "0348",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Address Change Received",
                "fr-CA": "CELCAN PD: Changement d’adresse reçu "
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46880,
            "code": "0349",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Beneficiary Designation Form Received",
                "fr-CA": "CELCANPD:Formulaire de designation de bénéficiaire"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46881,
            "code": "0350",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Complaint Letter",
                "fr-CA": "CELCAN PD: Lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46882,
            "code": "0351",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Death Package Received",
                "fr-CA": "CELCAN PD: Trousse de décès reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46883,
            "code": "0352",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Direct Deposit Authorisation",
                "fr-CA": "CELCAN PD: Formulaire de dépôt direct"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46884,
            "code": "0353",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Disability Calculation Request",
                "fr-CA": "CELCAN PD: Demande de calcul / Invalidité"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46885,
            "code": "0354",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Divorce Package Received",
                "fr-CA": "CELCAN PD: Trousse de divorce reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46886,
            "code": "0355",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: E-mail Received",
                "fr-CA": "CELCAN PD: Courriel reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46887,
            "code": "0356",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Enrolment Form Received",
                "fr-CA": "CELCAN PD: Formulaire d’adhésion reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46888,
            "code": "0357",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: File Request",
                "fr-CA": "CELCAN PD: Demande de dossier"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46889,
            "code": "0358",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Letter From Member Received",
                "fr-CA": "CELCAN PD: Lettre du participant reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46890,
            "code": "0359",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Mail Returned",
                "fr-CA": "CELCAN PD: Courrier retourné"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46891,
            "code": "0360",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Other Form Received",
                "fr-CA": "CELCAN PD: Formulaire reçu (autre)"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46892,
            "code": "0361",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Retirement Package Received",
                "fr-CA": "CELCAN PD: Trousse de retraite reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46893,
            "code": "0362",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Special Case",
                "fr-CA": "CELCAN PD: Cas spécial"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46894,
            "code": "0363",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Tax Election Form Received",
                "fr-CA": "CELCAN PD : Formulaire de choix fiscal reçu"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46895,
            "code": "0364",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Termination Package Received",
                "fr-CA": "CELCAN PD : Trousse de terminaison reçue"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 53433,
            "code": "0502",
            "isDefault": false,
            "description": {
                "en-US": "Retiree Opt Out",
                "fr-CA": "Retiree Opt Out"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 56592,
            "code": "0503",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: New Hire Enrol Form Received",
                "fr-CA": "CELCAN: New Hire Enrol Form Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 56593,
            "code": "0504",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: New RET Enrol Form Received",
                "fr-CA": "CELCAN: New RET Enrol Form Received"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 56594,
            "code": "0505",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change Form Received - Active",
                "fr-CA": "CELCAN: Change Form Received - Active"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 56595,
            "code": "0506",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change Form Received - Retiree",
                "fr-CA": "CELCAN: Change Form Received - Retiree"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32372,
            "code": "209",
            "isDefault": false,
            "description": {
                "en-US": "Conversion - Open Cas",
                "fr-CA": "Conversion - Open Case"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32373,
            "code": "9999",
            "isDefault": false,
            "description": {
                "en-US": "Vendor Inquiry",
                "fr-CA": "Vendor Inquiry"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34081,
            "code": "KFCF",
            "isDefault": false,
            "description": {
                "en-US": "Coversheet received via fax",
                "fr-CA": "De couverture a reçu par fax"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 33810,
            "code": "KFCM",
            "isDefault": false,
            "description": {
                "en-US": "Coversheet received in mail",
                "fr-CA": "Feuille de couverture reçu par la poste"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 33539,
            "code": "KFXF",
            "isDefault": false,
            "description": {
                "en-US": "KoFax released faxed document",
                "fr-CA": "Document envoyé par télécopie"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 33268,
            "code": "KFXM",
            "isDefault": false,
            "description": {
                "en-US": "KoFax released mailed document",
                "fr-CA": "Document reçu dans le courrier"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32997,
            "code": "KFXU",
            "isDefault": false,
            "description": {
                "en-US": "KoFax released uploaded document",
                "fr-CA": "Document téléchargé"
            }
        },
        {
            "logTypeCode": "DOCI",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34543,
            "code": "REIP",
            "isDefault": false,
            "description": {
                "en-US": "Retirement Initiation Process Request Form",
                "fr-CA": "Retirement Initiation Process Request Form"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32374,
            "code": "0035",
            "isDefault": false,
            "description": {
                "en-US": "DB: Pensioner Audit Form",
                "fr-CA": "DB: Formulaire audit de retraité"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32375,
            "code": "0036",
            "isDefault": false,
            "description": {
                "en-US": "DB: Death Package Sent",
                "fr-CA": "DB: Trousse de décès envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32376,
            "code": "0037",
            "isDefault": false,
            "description": {
                "en-US": "DB: Retirement Package Sent",
                "fr-CA": "DB: Trousse de retraite envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32377,
            "code": "0038",
            "isDefault": false,
            "description": {
                "en-US": "DB: Incomplete form returned",
                "fr-CA": "DB: Formulaire incomplet retourné"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32378,
            "code": "0039",
            "isDefault": false,
            "description": {
                "en-US": "DB: Letter/Memo Sent",
                "fr-CA": "DB: Lettre/mémo envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32379,
            "code": "0040",
            "isDefault": false,
            "description": {
                "en-US": "DB: QDRO Calculation Sent",
                "fr-CA": "DB: Calcul QDRO envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32380,
            "code": "0041",
            "isDefault": false,
            "description": {
                "en-US": "DB: Response to complaint letter",
                "fr-CA": "DB: Réponse à lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32381,
            "code": "0042",
            "isDefault": false,
            "description": {
                "en-US": "DB: Retirement confirmation memo sent",
                "fr-CA": "DB: Mémo confirmation de retraite envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32382,
            "code": "0043",
            "isDefault": false,
            "description": {
                "en-US": "DB: Termination Package Sent",
                "fr-CA": "DB: Trousse de cessation envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32383,
            "code": "0044",
            "isDefault": false,
            "description": {
                "en-US": "DB: Estimate Sent",
                "fr-CA": "DB: Estimé envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32384,
            "code": "0109",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (E-mail) - Zip Code Change",
                "fr-CA": "Enroll Notice (E-mail) - Zip Code Change"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32385,
            "code": "0110",
            "isDefault": false,
            "description": {
                "en-US": "Legal Documentation Requested",
                "fr-CA": "Legal Documentation Requested"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32386,
            "code": "0111",
            "isDefault": false,
            "description": {
                "en-US": "Enrollment Package Sent",
                "fr-CA": "Enrollment Package Sent"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32387,
            "code": "0112",
            "isDefault": false,
            "description": {
                "en-US": "Certificate of Creditable Coverage",
                "fr-CA": "Certificate of Creditable Coverage"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32388,
            "code": "0113",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (Paper) - Return to Work",
                "fr-CA": "Enroll Notice (Paper) - Return to Work"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32389,
            "code": "0114",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (E-mail) - Return to Work",
                "fr-CA": "Enroll Notice (E-mail) - Return to Work"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32390,
            "code": "0115",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (Paper) - Status Change",
                "fr-CA": "Enroll Notice (Paper) - Status Change"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32391,
            "code": "0116",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (E-mail) - Status Change",
                "fr-CA": "Enroll Notice (E-mail) - Status Change"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32392,
            "code": "0117",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (Paper) - Zip Code Change",
                "fr-CA": "Enroll Notice (Paper) - Zip Code Change"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32393,
            "code": "0118",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (Paper) - Loss of FMIB",
                "fr-CA": "Enroll Notice (Paper) - Loss of FMIB"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32394,
            "code": "0119",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (E-mail) - Loss of FMIB",
                "fr-CA": "Enroll Notice (E-mail) - Loss of FMIB"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32395,
            "code": "0120",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (Paper) - Dependent turns 23",
                "fr-CA": "Enroll Notice (Paper) - Dependent turns 23"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32398,
            "code": "0123",
            "isDefault": false,
            "description": {
                "en-US": "Overage dependent turns 19-22(e-mail)",
                "fr-CA": "Overage dependent turns 19-22(e-mail)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32399,
            "code": "0124",
            "isDefault": false,
            "description": {
                "en-US": "Handicapped Recertification (paper)",
                "fr-CA": "Handicapped Recertification (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32400,
            "code": "0125",
            "isDefault": false,
            "description": {
                "en-US": "Handicapped Recertification (e-mail)",
                "fr-CA": "Handicapped Recertification (e-mail)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32401,
            "code": "0126",
            "isDefault": false,
            "description": {
                "en-US": "Confirmation of coverage (paper)",
                "fr-CA": "Confirmation of coverage (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32402,
            "code": "0127",
            "isDefault": false,
            "description": {
                "en-US": "Confirmation of coverage (e-mail)",
                "fr-CA": "Confirmation of coverage (e-mail)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32403,
            "code": "0128",
            "isDefault": false,
            "description": {
                "en-US": "Benefit Information Request",
                "fr-CA": "Benefit Information Request"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32404,
            "code": "0129",
            "isDefault": false,
            "description": {
                "en-US": "COBRA/Direct Bill Correspondence",
                "fr-CA": "COBRA/Direct Bill Correspondence"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32405,
            "code": "0130",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Initial Notification",
                "fr-CA": "COBRA Initial Notification"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32406,
            "code": "0131",
            "isDefault": false,
            "description": {
                "en-US": "Refund check",
                "fr-CA": "Refund check"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32407,
            "code": "0132",
            "isDefault": false,
            "description": {
                "en-US": "QMCSO Accepted",
                "fr-CA": "QMCSO Accepted"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32408,
            "code": "0133",
            "isDefault": false,
            "description": {
                "en-US": "QMCSO Rejected",
                "fr-CA": "QMCSO Rejected"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32409,
            "code": "0134",
            "isDefault": false,
            "description": {
                "en-US": "QMCSO Acknowledgement sent",
                "fr-CA": "QMCSO Acknowledgement sent"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32410,
            "code": "0135",
            "isDefault": false,
            "description": {
                "en-US": "Returned Mail",
                "fr-CA": "Returned Mail"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32411,
            "code": "0136",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Missing Info Letter",
                "fr-CA": "COBRA Missing Info Letter"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32412,
            "code": "0137",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Notice of unavailability",
                "fr-CA": "COBRA Notice of unavailability"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32413,
            "code": "0138",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Coverage termination notice",
                "fr-CA": "COBRA Coverage termination notice"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32414,
            "code": "0139",
            "isDefault": false,
            "description": {
                "en-US": "New Hire Event/New Hire Packet",
                "fr-CA": "New Hire Event/New Hire Packet"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32415,
            "code": "0140",
            "isDefault": false,
            "description": {
                "en-US": "Conversion Notice",
                "fr-CA": "Conversion Notice"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32416,
            "code": "0141",
            "isDefault": false,
            "description": {
                "en-US": "Medical SPD (email)",
                "fr-CA": "Medical SPD (email)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32417,
            "code": "0142",
            "isDefault": false,
            "description": {
                "en-US": "Medical SPD (paper)",
                "fr-CA": "Medical SPD (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32418,
            "code": "0143",
            "isDefault": false,
            "description": {
                "en-US": "Dental SPD (email)",
                "fr-CA": "Dental SPD (email)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32419,
            "code": "0144",
            "isDefault": false,
            "description": {
                "en-US": "Dental SPD (paper)",
                "fr-CA": "Dental SPD (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32420,
            "code": "0145",
            "isDefault": false,
            "description": {
                "en-US": "STD/LTD SPD (email)",
                "fr-CA": "STD/LTD SPD (email)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32421,
            "code": "0146",
            "isDefault": false,
            "description": {
                "en-US": "STD/LTD SPD (paper)",
                "fr-CA": "STD/LTD SPD (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32422,
            "code": "0148",
            "isDefault": false,
            "description": {
                "en-US": "DB: Assistance with forms",
                "fr-CA": "DB: Assistance with forms"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 60960,
            "code": "0156",
            "isDefault": false,
            "description": {
                "en-US": "CELA",
                "fr-CA": "CELA"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 60961,
            "code": "0157",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Peer Review",
                "fr-CA": "CELCAN: Peer Review"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32423,
            "code": "0207",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Follow Up",
                "fr-CA": "Dependent Audit Follow Up"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32424,
            "code": "0208",
            "isDefault": false,
            "description": {
                "en-US": "Follow Up Memo Sent",
                "fr-CA": "Follow Up Memo Sent"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32425,
            "code": "0209",
            "isDefault": false,
            "description": {
                "en-US": "Life Event Documents Not Received",
                "fr-CA": "Life Event Documents Not Received"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46833,
            "code": "0302",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Beneficiary Form Sent",
                "fr-CA": "CELCAN: Formulaire de bénéficiaire envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46834,
            "code": "0303",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Benefit Confirmation Statement Sent",
                "fr-CA": "CELCAN: Confirmation de bénéficiaire envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46835,
            "code": "0304",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Package Sent",
                "fr-CA": "CELCAN: Trousse de décès envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46836,
            "code": "0305",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Enrolment Kit Sent",
                "fr-CA": "CELCAN: Trousse d’adhésion envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46837,
            "code": "0306",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: EOI Form Sent to Insurer",
                "fr-CA": "CELCAN: Formulaire EOI envoyé à l’assureur"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46838,
            "code": "0307",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Final Notice Sent",
                "fr-CA": "CELCAN: Avis final envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46839,
            "code": "0308",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Incomplete Form Returned",
                "fr-CA": "CELCAN: Formulaire incomplet retourné"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46840,
            "code": "0309",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Letter/Memo Sent",
                "fr-CA": "CELCAN: Lettre / Mémo envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46841,
            "code": "0310",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Missing Form Sent",
                "fr-CA": "CELCAN: Formulaire manquant envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46842,
            "code": "0311",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Overaged Dependent Form Sent",
                "fr-CA": "CELCAN: Formulaire de statut étudiant envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46843,
            "code": "0312",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Prepayment Letter Sent",
                "fr-CA": "CELCAN: Lettre de prépaiement envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46844,
            "code": "0313",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Response to complaint letter",
                "fr-CA": "CELCAN: Réponse à une lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46845,
            "code": "0314",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Address change",
                "fr-CA": "CELCAN: Changement d’adresse"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46846,
            "code": "0315",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Assistance with Forms",
                "fr-CA": "CELCAN: Assistance aux formulaires"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46847,
            "code": "0316",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change Banking Information",
                "fr-CA": "CELCAN: Changement d’information bancaire"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46848,
            "code": "0317",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Change/Confirmation (Name, DOB)",
                "fr-CA": "CELCAN: Changement/Confirmation (Nom, DDN)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46849,
            "code": "0318",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Reported",
                "fr-CA": "CELCAN: Décès rapporté"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46850,
            "code": "0319",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: To-Do Follow- Up",
                "fr-CA": "CELCAN: To-Do / suivi"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46851,
            "code": "0320",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Update Powerflex",
                "fr-CA": "CELCAN: Mise à jour Powerflex"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46852,
            "code": "0321",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN:Future date Enrolment/Change Form processed",
                "fr-CA": "Formulaire d’adhésion/modification date future tra"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46853,
            "code": "0322",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN:Future dated Enrolment/Change Form received",
                "fr-CA": "Formulaire d’adhésion/modification date future reç"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46854,
            "code": "0323",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Cost Override button",
                "fr-CA": "CELCAN: Bouton pour Cost Override"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46855,
            "code": "0324",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: CHR Manual Update",
                "fr-CA": "CELCAN: Mise à jour CHR"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46856,
            "code": "0325",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Custom Plan",
                "fr-CA": "CELCAN: Régime spécial"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46857,
            "code": "0326",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Default Coverage",
                "fr-CA": "CELCAN: Couverture par défaut"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46858,
            "code": "0327",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Manual Update",
                "fr-CA": "CELCAN: Mise à jour manuelle"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46859,
            "code": "0328",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Request for Benefits Confirmation Letter",
                "fr-CA": "CELCAN:Demande de confirmation écrite des protecti"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46860,
            "code": "0329",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Annual Statement Question",
                "fr-CA": "CELCAN PD : Relevé annuel – Question"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46861,
            "code": "0330",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Calculation Request",
                "fr-CA": "CELCAN PD: Demande pour un calcul"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46862,
            "code": "0331",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Divorce Question",
                "fr-CA": "CELCAN PD : Question sur le divorce"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46863,
            "code": "0332",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Enrolment Process",
                "fr-CA": "CELCAN PD : Question sur l’adhésion"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46864,
            "code": "0333",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Follow-up on a request",
                "fr-CA": "CELCAN PD: Suivi d’une demande"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46865,
            "code": "0334",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: General Plan Question",
                "fr-CA": "CELCAN PD : Question générale sur le régime"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46866,
            "code": "0335",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Leave of Absence Question",
                "fr-CA": "CELCAN PD : Question sur le congé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46867,
            "code": "0336",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: PFA Question",
                "fr-CA": "CELCAN PD : Question PFA"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46868,
            "code": "0337",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Request for annual statement",
                "fr-CA": "CELCAN PD: Demande pour un relevé annuel"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46869,
            "code": "0338",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Retirement Package Question",
                "fr-CA": "CELCAN PD: Question sur la trousse de retraite"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46870,
            "code": "0339",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Termination Package Question",
                "fr-CA": "CELCAN PD: Question sur la trousse de terminaison"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46871,
            "code": "0340",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN Lost or stolen check",
                "fr-CA": "CELCAN Chèque perdu ou volé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46872,
            "code": "0341",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN Payroll Deduction Question",
                "fr-CA": "CELCAN Déductions de paie / Question"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46873,
            "code": "0342",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN Pension Payment Question",
                "fr-CA": "CELCAN Paiement de rente / Question"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46896,
            "code": "0365",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Death Package Sent",
                "fr-CA": "CELCAN PD : Trousse de décès envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46897,
            "code": "0366",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Divorce Package Sent",
                "fr-CA": "CELCAN PD : Trousse de divorce envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46898,
            "code": "0367",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Estimate Sent",
                "fr-CA": "CELCAN PD : Estimé envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46899,
            "code": "0368",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Final Notice Sent",
                "fr-CA": "CELCAN PD : Avis final envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46900,
            "code": "0369",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Incomplete Form Returned",
                "fr-CA": "CELCAN PD : Formulaire incomplet retourné"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46901,
            "code": "0370",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Letter/Memo Sent",
                "fr-CA": "CELCAN PD : Lettre / Mémo envoyé"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46902,
            "code": "0371",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Pensioner Audit Form",
                "fr-CA": "CELCAN PD : Formulaire d’audit de retraité"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46903,
            "code": "0372",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Response to complaint letter",
                "fr-CA": "CELCAN PD : Réponse à une lettre de plainte"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46904,
            "code": "0373",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Retirement Confirmation Memo",
                "fr-CA": "CELCAN PD : Mémo de confirmation de retraite"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46905,
            "code": "0374",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Retirement Package Sent",
                "fr-CA": "CELCAN PD : Trousse de retraite envoyée"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46906,
            "code": "0375",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Address change",
                "fr-CA": "CELCAN PD : Changement d’adresse"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46907,
            "code": "0376",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Assistance with Forms",
                "fr-CA": "CELCAN PD : Assistance aux formulaires"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46908,
            "code": "0377",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Change Banking Information",
                "fr-CA": "CELCAN PD : Changement d’information bancaire"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46909,
            "code": "0378",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Change/Confirmation (Name, DOB)",
                "fr-CA": "CELCAN PD : Changement/Confirmation (Nom, DDN)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46910,
            "code": "0379",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN DB: Death Reported",
                "fr-CA": "CELCAN PD : Décès rapporté"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 55423,
            "code": "0386",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Retirement kit sent",
                "fr-CA": "CELCAN: Retirement kit sent"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32426,
            "code": "0400",
            "isDefault": false,
            "description": {
                "en-US": "COBRA Subsidy",
                "fr-CA": "COBRA Subsidy"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 53434,
            "code": "0503",
            "isDefault": false,
            "description": {
                "en-US": "Retiree Opt Out",
                "fr-CA": "Retiree Opt Out"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32396,
            "code": "0507",
            "isDefault": false,
            "description": {
                "en-US": "Enroll Notice (E-mail) - Dependent turns 23",
                "fr-CA": "Enroll Notice (E-mail) - Dependent turns 23"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32397,
            "code": "0508",
            "isDefault": false,
            "description": {
                "en-US": "Overage dependent turns 19-22 (paper)",
                "fr-CA": "Overage dependent turns 19-22 (paper)"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 58319,
            "code": "0510",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Death Reported – Spouse or Dependent",
                "fr-CA": "CELCAN: Death Reported – Spouse or Dependent"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 58878,
            "code": "0511",
            "isDefault": false,
            "description": {
                "en-US": "CelCan: Life Claim sent to Carrier",
                "fr-CA": "FR:CelCan: Life Claim sent to Carrier"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32427,
            "code": "210",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Follow Up",
                "fr-CA": "Dependent Audit Follow Up"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 47739,
            "code": "401",
            "isDefault": false,
            "description": {
                "en-US": "CELCAN: Carrier Update",
                "fr-CA": "CELCAN: Mise à jour chez l'assureur"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32428,
            "code": "9999",
            "isDefault": false,
            "description": {
                "en-US": "Vendor",
                "fr-CA": "Vendor"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34110,
            "code": "DDSE",
            "isDefault": false,
            "description": {
                "en-US": "Doc emailed by doc delivery services",
                "fr-CA": "FR:Doc emailed by doc delivery services"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34112,
            "code": "DDSG",
            "isDefault": false,
            "description": {
                "en-US": "DDS Generated Document",
                "fr-CA": "FR:DDS Generated Document"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 34111,
            "code": "DDSP",
            "isDefault": false,
            "description": {
                "en-US": "Doc printed and mailed by doc delivery services",
                "fr-CA": "FR:Doc printed and mailed by doc delivery services"
            }
        },
        {
            "logTypeCode": "DOCO",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 32429,
            "code": "I207",
            "isDefault": false,
            "description": {
                "en-US": "Dependent Audit Initial Letter",
                "fr-CA": "Dependent Audit Initial Letter"
            }
        },
        {
            "logTypeCode": "SMTX",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31284,
            "code": "SMNO",
            "isDefault": false,
            "description": {
                "en-US": "Member was not satisfied with call service",
                "fr-CA": "Member was not satisfied with call service"
            }
        },
        {
            "logTypeCode": "SMTX",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 31285,
            "code": "SMYS",
            "isDefault": false,
            "description": {
                "en-US": "Member was satisfied with call service",
                "fr-CA": "Member was satisfied with call service"
            }
        },
        {
            "logTypeCode": "MOB",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 51027,
            "code": "MMSK",
            "isDefault": false,
            "description": {
                "en-US": "Member unmasked login ID",
                "fr-CA": "Membre a démasqué ID de connexion"
            }
        },
        {
            "logTypeCode": "MOB",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 43603,
            "code": "MOBA",
            "isDefault": false,
            "description": {
                "en-US": "Web Site Access",
                "fr-CA": "Accès au site"
            }
        },
        {
            "logTypeCode": "MOB",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 49017,
            "code": "MOBR",
            "isDefault": false,
            "description": {
                "en-US": "Member login via self registration",
                "fr-CA": "Membre connecté via l'auto-enregistrement"
            }
        },
        {
            "logTypeCode": "MOB",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 52032,
            "code": "MREG",
            "isDefault": false,
            "description": {
                "en-US": "Member is fully registered",
                "fr-CA": "Membre est inscrit"
            }
        },
        {
            "logTypeCode": "MOB",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 50022,
            "code": "MRID",
            "isDefault": false,
            "description": {
                "en-US": "Member retrieved login ID",
                "fr-CA": "Membre a récupéré ID de connexion"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 55525,
            "code": "LKPI",
            "isDefault": false,
            "description": {
                "en-US": "Too many failed password attempts",
                "fr-CA": "Trop d’échecs de saisie du mot de passe"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 64440,
            "code": "PLNK",
            "isDefault": false,
            "description": {
                "en-US": "Password change link requested by member",
                "fr-CA": "Lien demandé par le participant"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 46296,
            "code": "SSOW",
            "isDefault": false,
            "description": {
                "en-US": "Web Portal Access via SSO",
                "fr-CA": "Web Portal Access via SSO"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 43909,
            "code": "WEBA",
            "isDefault": false,
            "description": {
                "en-US": "Web Site Access",
                "fr-CA": "Accès au site"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 49352,
            "code": "WEBR",
            "isDefault": false,
            "description": {
                "en-US": "Member login via self registration",
                "fr-CA": "Membre connecté via l'auto-enregistrement"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 51362,
            "code": "WMSK",
            "isDefault": false,
            "description": {
                "en-US": "Member unmasked login ID",
                "fr-CA": "Membre a démasqué ID de connexion"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 52367,
            "code": "WREG",
            "isDefault": false,
            "description": {
                "en-US": "Member is fully registered",
                "fr-CA": "Membre est inscrit"
            }
        },
        {
            "logTypeCode": "WEBP",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 50357,
            "code": "WRID",
            "isDefault": false,
            "description": {
                "en-US": "Member retrieved login ID",
                "fr-CA": "Membre a récupéré ID de connexion"
            }
        },
        {
            "logTypeCode": "SBC",
            "logCategoryCode": "GENERAL",
            "isActive": true,
            "id": 44204,
            "code": "999",
            "isDefault": false,
            "description": {
                "en-US": "Test file mapping",
                "fr-CA": "FR:Test file mapping"
            }
        }
    ],
    "logStatuses": [
        {
            "logTypeCode": "DOCO",
            "id": 26,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "DOCO",
            "id": 27,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "DOCI",
            "id": 25,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "DOCI",
            "id": 24,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "CALI",
            "id": 3,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "CALI",
            "id": 1,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "CALI",
            "id": 2,
            "code": "SUPR",
            "isDefault": false,
            "description": {
                "en-US": "Supervisor's Attention",
                "fr-CA": "Attention du superviseur"
            }
        },
        {
            "logTypeCode": "CALO",
            "id": 20,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "CALO",
            "id": 18,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "BOL",
            "id": 23,
            "code": "CANC",
            "isDefault": false,
            "description": {
                "en-US": "Cancelled",
                "fr-CA": "Annulé"
            }
        },
        {
            "logTypeCode": "BOL",
            "id": 28,
            "code": "COMP",
            "isDefault": false,
            "description": {
                "en-US": "Completed",
                "fr-CA": "Terminé"
            }
        },
        {
            "logTypeCode": "BOL",
            "id": 17,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "BOL",
            "id": 16,
            "code": "HOLD",
            "isDefault": false,
            "description": {
                "en-US": "Hold",
                "fr-CA": "En attente"
            }
        },
        {
            "logTypeCode": "BOL",
            "id": 15,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "SMTX",
            "id": 29,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "DONE",
                "fr-CA": "DONE"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 48,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 49,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 50,
            "code": "SUPR",
            "isDefault": false,
            "description": {
                "en-US": "Supervisor's Attention",
                "fr-CA": "Attention du superviseur"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 51,
            "code": "CANC",
            "isDefault": false,
            "description": {
                "en-US": "Cancelled",
                "fr-CA": "Annulé"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 52,
            "code": "COMP",
            "isDefault": false,
            "description": {
                "en-US": "Completed",
                "fr-CA": "Terminé"
            }
        },
        {
            "logTypeCode": "MOB",
            "id": 53,
            "code": "HOLD",
            "isDefault": false,
            "description": {
                "en-US": "Hold",
                "fr-CA": "En attente"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 54,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 55,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 56,
            "code": "SUPR",
            "isDefault": false,
            "description": {
                "en-US": "Supervisor's Attention",
                "fr-CA": "Attention du superviseur"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 57,
            "code": "CANC",
            "isDefault": false,
            "description": {
                "en-US": "Cancelled",
                "fr-CA": "Annulé"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 58,
            "code": "COMP",
            "isDefault": false,
            "description": {
                "en-US": "Completed",
                "fr-CA": "Terminé"
            }
        },
        {
            "logTypeCode": "WEBP",
            "id": 59,
            "code": "HOLD",
            "isDefault": false,
            "description": {
                "en-US": "Hold",
                "fr-CA": "En attente"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 60,
            "code": "DONE",
            "isDefault": false,
            "description": {
                "en-US": "Done",
                "fr-CA": "Fait"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 61,
            "code": "PEND",
            "isDefault": false,
            "description": {
                "en-US": "Pending",
                "fr-CA": "En cours"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 62,
            "code": "SUPR",
            "isDefault": false,
            "description": {
                "en-US": "Supervisor's Attention",
                "fr-CA": "Attention du superviseur"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 63,
            "code": "CANC",
            "isDefault": false,
            "description": {
                "en-US": "Cancelled",
                "fr-CA": "Annulé"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 64,
            "code": "COMP",
            "isDefault": false,
            "description": {
                "en-US": "Completed",
                "fr-CA": "Terminé"
            }
        },
        {
            "logTypeCode": "SBC",
            "id": 65,
            "code": "HOLD",
            "isDefault": false,
            "description": {
                "en-US": "Hold",
                "fr-CA": "En attente"
            }
        }
    ],
    "logDeliveryModes": [
        {
            "id": 1,
            "code": "N/A",
            "isDefault": false,
            "description": {
                "en-US": "N/A",
                "fr-CA": "N/A"
            }
        },
        {
            "id": 2,
            "code": "COURIER",
            "isDefault": false,
            "description": {
                "en-US": "Courier",
                "fr-CA": "Messager"
            }
        },
        {
            "id": 3,
            "code": "EMAIL",
            "isDefault": false,
            "description": {
                "en-US": "Email",
                "fr-CA": "Courriel"
            }
        },
        {
            "id": 4,
            "code": "FAX",
            "isDefault": false,
            "description": {
                "en-US": "Fax",
                "fr-CA": "Télécopieur"
            }
        },
        {
            "id": 5,
            "code": "INPERSON",
            "isDefault": false,
            "description": {
                "en-US": "In Person Walk-in",
                "fr-CA": "En mains propres"
            }
        },
        {
            "id": 6,
            "code": "MAIL",
            "isDefault": false,
            "description": {
                "en-US": "Mail",
                "fr-CA": "Courier"
            }
        },
        {
            "id": 7,
            "code": "SCANNED",
            "isDefault": false,
            "description": {
                "en-US": "Scanned",
                "fr-CA": "Numérisées"
            }
        }
    ],
    "logIvrModes": [
        {
            "id": 0,
            "code": "NOIVR",
            "isDefault": true,
            "description": {
                "en-US": "Non IVR phone call",
                "fr-CA": "Pas un appel téléphonique IVR"
            }
        },
        {
            "id": 1,
            "code": "IVR",
            "isDefault": false,
            "description": {
                "en-US": "IVR phone call",
                "fr-CA": "Réponse Vocale Interactive appel téléphonique"
            }
        },
        {
            "id": 2,
            "code": "IVRMANUAL",
            "isDefault": false,
            "description": {
                "en-US": "IVR phone call requiring agent authentication",
                "fr-CA": "Réponse Vocale Interactive appel téléphonique nécessitant une authentification de l'agent"
            }
        }
    ],
    "offices": [
        {
            "id": 12,
            "code": "ONCC",
            "description": {
                "en-US": "Ontario Call Centre",
                "fr-CA": "Centre d’appels de l’Ontario"
            },
            "isDefault": false
        },
        {
            "id": 13,
            "code": "MOCC",
            "description": {
                "en-US": "Montreal Call Centre",
                "fr-CA": "Centre d’appels de Montréal"
            },
            "isDefault": false
        },
        {
            "id": 14,
            "code": "VADHCC",
            "description": {
                "en-US": "Vancouver Call Centre",
                "fr-CA": "Centre d’appels de Vancouver"
            },
            "isDefault": false
        },
        {
            "id": 15,
            "code": "ATLCC",
            "description": {
                "en-US": "Atlanta Call Center",
                "fr-CA": "Centre d’appels de Vancouver"
            },
            "isDefault": false
        },
        {
            "id": 16,
            "code": "PGHCC",
            "description": {
                "en-US": "Pittsburgh Call Center",
                "fr-CA": "Centre d’appels de Pittsburgh"
            },
            "isDefault": false
        },
        {
            "id": 17,
            "code": "CLT",
            "description": {
                "en-US": "External Client Office",
                "fr-CA": "Bureau des clients externes"
            },
            "isDefault": false
        },
        {
            "id": 18,
            "code": "MS",
            "description": {
                "en-US": "Morneau Shepell Office",
                "fr-CA": "Bureau de Morneau Shepell"
            },
            "isDefault": false
        }
    ]
}