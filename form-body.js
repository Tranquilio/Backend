const template = {
    "type": "quiz",
    "title": "Workplace Wellness Survey NEW TEST!!!",
    "workspace": {
        "href": "https://api.typeform.com/workspaces/7JD6E4"
    },
    "theme": {
        "href": "https://api.typeform.com/themes/EAwIxEN9"
    },
    "settings": {
        "language": "en",
        "progress_bar": "percentage",
        "meta": {
            "allow_indexing": false
        },
        "hide_navigation": false,
        "is_public": true,
        "is_trial": false,
        "show_progress_bar": true,
        "show_typeform_branding": false,
        "are_uploads_public": false,
        "show_time_to_complete": true,
        "show_number_of_submissions": false,
        "show_cookie_consent": false,
        "show_question_number": true,
        "pro_subdomain_enabled": false,
        "notifications": {
            "self": {
                "enabled": true,
                "message": "{{form:title}} has a new response:\n\nScore: {{var:score}}%\n\nScore Breakdown (Low score means greater stress):\nJob Demand: {{var:job_demand}}%\nJob Control: {{var:job_control}}%\nJob Recognition: {{var:job_recognition}}%\nJob Satisfaction: {{var:job_satisfaction}}%\nSocial Support: {{var:social_support}}%\nOrganizational Culture: {{var:organizational_culture}}%\n\nWe're one step closer :)",
                "recipients": [
                    "aayush@tranquilio.co",
                    "weihan@tranquilio.co",
                    "verlyn@tranquilio.co"
                ],
                "subject": "Wohooo! New response for {{form:title}}"
            },
            "respondent": {
                "enabled": true,
                "message": "Hello!\n\nFirst of all, thanks for taking the time out of your busy day to fill out the survey. Here are your results:\n\nScore: {{var:score}}%\n\nScore Breakdown (Low score means greater stress):\nJob Demand: {{var:job_demand}}%\nJob Control: {{var:job_control}}%\nJob Recognition: {{var:job_recognition}}%\nJob Satisfaction: {{var:job_satisfaction}}%\nSocial Support: {{var:social_support}}%\nOrganizational Culture: {{var:organizational_culture}}%\n\nWe welcome any feedback regarding the survey!\n\nThank you & have a nice day!\nThe Tranquilio Team",
                "recipient": "{{field:95ee8e6e-5cc4-4f4c-b65f-dbed2fb19aa1}}",
                "reply_to": [
                    "aayush@tranquilio.co"
                ],
                "subject": "Your Tranquilio Stress Assessment breakdown! "
            }
        },
        "capabilities": {
            "e2e_encryption": {
                "enabled": false,
                "modifiable": false
            }
        }
    },
    "thankyou_screens": [
        {
            "ref": "ecc5bb49-e10b-42e1-80ce-fdc86bb2c600",
            "title": "{{var:description}}\n\n*Your Score: **{{var:score}}**%*",
            "type": "thankyou_screen",
            "properties": {
                "show_button": true,
                "share_icons": false,
                "button_mode": "redirect",
                "button_text": "Understand my Stressor!",
                "redirect_url": "https://www.tranquilio.co/knowledge-base",
                "description": "*Score Breakdown (Low score means greater stress):*\nJob Demand: {{var:job_demand}}%\nJob Control: {{var:job_control}}%\nJob Recognition: {{var:job_recognition}}%\nJob Satisfaction: {{var:job_satisfaction}}%\nSocial Support: {{var:social_support}}%\nOrganizational Culture: {{var:organizational_culture}}%\n\n*Want to understand the meaning behind these scores?*"
            }
        },
        {
            "ref": "630fcabf-7dcf-4804-94ca-1454f2452a7c",
            "title": "",
            "type": "thankyou_screen",
            "properties": {
                "show_button": true,
                "share_icons": true,
                "button_mode": "default_redirect",
                "button_text": "Create a typeform"
            }
        },
        {
            "ref": "default_tys",
            "title": "All done! Thanks for your time.",
            "type": "thankyou_screen",
            "properties": {
                "show_button": false,
                "share_icons": false
            }
        }
    ],
    "welcome_screens": [
        {
            "ref": "e385c0e5-1cf7-44b2-b0f6-d971c83e7fd7",
            "title": "*What's causing you stress at work?*",
            "properties": {
                "show_button": true,
                "button_text": "Try it out",
                "description": "Whether you're an intern or working full-time, most of us are caught up in day-to-day life. We sometimes might forget to take a step back and reflect. Use this tool to identify major stressors at work & understand ways to improve your well-being! This is the a survey generated using code..."
            }
        }
    ],
    "fields": [
        {
            "title": "I am...",
            "ref": "6ab22a11-cb76-41df-b24a-ca814f2c33af",
            "properties": {
                "randomize": false,
                "allow_multiple_selection": false,
                "allow_other_choice": false,
                "vertical_alignment": true,
                "choices": [
                    {
                        "ref": "76d7fd1c-222b-4d29-98c2-b3888c8b37aa",
                        "label": "A student"
                    },
                    {
                        "ref": "b3ed5fa1-056b-4fc7-a53a-c385d2649f7d",
                        "label": "Working full-time"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "multiple_choice"
        },
        {
            "title": "Imagine you're back as an intern at your previous company...\n\nAnswer the following questions to understand your stressors at work so that you can better manage your well-being at in future companies!",
            "ref": "e889ed5a-0a68-4d03-a91f-9dddd2347294",
            "properties": {
                "button_text": "Continue",
                "hide_marks": false
            },
            "type": "statement"
        },
        {
            "title": "After a typical day at work, I feel...",
            "ref": "36b6cc9a-f204-4b36-82f0-ff70895f4ef1",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Drained",
                    "right": "Fulfilled"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "To successfully complete my work, I usually...",
            "ref": "9cbd6aa0-d227-4293-84c8-79a5b78b1ff0",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Work after hours",
                    "right": "Do not feel rushed"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When my friends ask me about my job, I will generally...",
            "ref": "f02b2807-623e-4709-9994-77646fd738fc",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Complain about it",
                    "right": "Share passionately"
                }
            },
            "validations": {
                "required": false
            },
            "type": "opinion_scale"
        },
        {
            "title": "When I am doing my job, I generally aim to...",
            "ref": "25306b50-d96a-4a4f-aba2-055b4a9bd8d7",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Do only what's required",
                    "right": "Go above and beyond"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "At work, I feel that my contributions are...",
            "ref": "bbc5dd89-a52c-421f-9ac0-376b18e4a8a7",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Overlooked",
                    "right": "Valued"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "For the work I put in, I think I am...",
            "ref": "a6a2c668-6c42-4eda-bfc4-817b96be6d6e",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Underpaid",
                    "right": "Fairly compensated"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "To progress meaningfully in my workplace, my path forward is...",
            "ref": "febfb078-f020-4152-95b9-1305a658fe47",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Uncertain",
                    "right": "Clear"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "In my current role, I generally feel I am...",
            "ref": "431b242f-98d0-4c99-ab61-7353efc69c47",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Stagnant",
                    "right": "Meaningfully progressing"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When doing work, I usually feel I have...",
            "ref": "0066ff4e-aed4-4713-8033-55b987c9cde5",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "No Control",
                    "right": "Reasonable Control"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When I am overwhelmed at work, I...",
            "ref": "9b25bec0-b900-47fc-8fd0-7f10622a915b",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Keep problems to myself",
                    "right": "Have someone to talk to"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When I need guidance at work, I...",
            "ref": "cf71ca66-9c23-46a5-b42f-6a4a7aa40090",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Prefer not to disturb",
                    "right": "Know who to approach"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When I excuse myself from work during a personal emergency, I feel...",
            "ref": "044910db-dfff-4a33-9df6-d07f69826e86",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Guilty",
                    "right": "Understood"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "When I am at work, I generally feel...",
            "ref": "5e8bb155-d539-468e-988a-a664ac64b468",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Distant",
                    "right": "Like I belong"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "I feel that the upper management is...",
            "ref": "0088e045-2ad5-49a3-b2e6-c737207ac5dc",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "Unaware of things",
                    "right": "Connected with the team"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "To improve the workplace, I have...",
            "ref": "6ad6d4d0-33fc-4ebe-8a07-2b31c5e962b7",
            "properties": {
                "start_at_one": true,
                "steps": 6,
                "labels": {
                    "left": "No chance to voice out",
                    "right": "Freedom to give feedback"
                }
            },
            "validations": {
                "required": true
            },
            "type": "opinion_scale"
        },
        {
            "title": "Which country are you from?",
            "ref": "e3f8e97b-672e-4e38-8278-a66226efe8fd",
            "properties": {},
            "validations": {
                "required": true
            },
            "type": "short_text"
        },
        {
            "title": "Which industry are you from?",
            "ref": "4632efcd-ad63-4293-bdb1-29f6df1f7f9c",
            "properties": {
                "randomize": false,
                "alphabetical_order": false,
                "choices": [
                    {
                        "ref": "c3c1d8bd-6007-4921-9a5b-ae54ad80ca17",
                        "label": "Information Technology"
                    },
                    {
                        "ref": "eb1404e9-8969-4a7b-b22c-4ec0c5b90321",
                        "label": "Engineering and architecture"
                    },
                    {
                        "ref": "3f5cafe9-6e92-468c-bb06-6bd211d30cdc",
                        "label": "Arts, culture, and entertainment"
                    },
                    {
                        "ref": "91c7f645-aa8a-4808-a1c7-4e6f34953762",
                        "label": "Consulting"
                    },
                    {
                        "ref": "01a4614c-fa97-46ee-ae31-900c90097330",
                        "label": "Communications"
                    },
                    {
                        "ref": "569e62a3-9e98-4600-9dd8-131f82114278",
                        "label": "Community and social services"
                    },
                    {
                        "ref": "22df591e-6d06-4da7-8ba2-a79af057eb4a",
                        "label": "Education"
                    },
                    {
                        "ref": "62dbf5be-037c-4e70-8b02-848e6b23e9f6",
                        "label": "Government"
                    },
                    {
                        "ref": "46f09a64-4ab7-4a40-8bf7-ec95e444be36",
                        "label": "Health and medicine"
                    },
                    {
                        "ref": "4b479341-044c-4327-93d9-dcdb039d2a92",
                        "label": "Law and public policy"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "dropdown"
        },
        {
            "title": "Which company do you work at?",
            "ref": "e3d8e009-0a1e-49b9-8a10-9f4bfce06ab2",
            "properties": {
                "description": "This is completely optional"
            },
            "validations": {
                "required": false
            },
            "type": "short_text"
        },
        {
            "title": "Which company did you last work at?",
            "ref": "2e5137af-189f-4e5c-9b7c-c0f5ae342bc3",
            "properties": {
                "description": "This is completely optional"
            },
            "validations": {
                "required": false
            },
            "type": "short_text"
        },
        {
            "title": "What is your current role in your company?",
            "ref": "d83c3f13-8bdc-47d4-9c97-391bc2a670b8",
            "properties": {},
            "validations": {
                "required": true
            },
            "type": "short_text"
        },
        {
            "title": "What was your role in the company?",
            "ref": "3560b289-68a2-4898-9527-d6ce89e3bf24",
            "properties": {},
            "validations": {
                "required": true
            },
            "type": "short_text"
        },
        {
            "title": "*Tranquilio's vision is to improve well-being, in current and future workplaces.*\n\nBy understanding what's causing us stress and burnout at work, we can start the conversation on how organizations approach workplace mental wellbeing.",
            "ref": "383ef77a-e0a6-4ddf-8117-bb5bc563f843",
            "properties": {
                "description": "We appreciate you for completing this assessment!\n\nDon't worry about your privacy! We keep the survey results anonymized. Check out our [Terms of Use](https://www.tranquilio.co/terms-of-use) & [Privacy Policy](https://www.tranquilio.co/privacy-policy) for more info.",
                "button_text": "Continue",
                "hide_marks": false
            },
            "type": "statement"
        },
        {
            "title": "Please fill out your email to get a copy of your results!",
            "ref": "95ee8e6e-5cc4-4f4c-b65f-dbed2fb19aa1",
            "properties": {},
            "validations": {
                "required": false
            },
            "type": "email"
        }
    ],
    "variables": {
        "description": " ",
        "job_control": 0,
        "job_demand": 0,
        "job_recognition": 0,
        "job_satisfaction": 0,
        "organizational_culture": 0,
        "score": 0,
        "social_support": 0,
        "top_stressor": " "
    },
    "logic": [
        {
            "type": "field",
            "ref": "6ab22a11-cb76-41df-b24a-ca814f2c33af",
            "actions": [
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "e889ed5a-0a68-4d03-a91f-9dddd2347294"
                        }
                    },
                    "condition": {
                        "op": "is",
                        "vars": [
                            {
                                "type": "field",
                                "value": "6ab22a11-cb76-41df-b24a-ca814f2c33af"
                            },
                            {
                                "type": "choice",
                                "value": "76d7fd1c-222b-4d29-98c2-b3888c8b37aa"
                            }
                        ]
                    }
                },
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "36b6cc9a-f204-4b36-82f0-ff70895f4ef1"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "4632efcd-ad63-4293-bdb1-29f6df1f7f9c",
            "actions": [
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "2e5137af-189f-4e5c-9b7c-c0f5ae342bc3"
                        }
                    },
                    "condition": {
                        "op": "is",
                        "vars": [
                            {
                                "type": "field",
                                "value": "6ab22a11-cb76-41df-b24a-ca814f2c33af"
                            },
                            {
                                "type": "choice",
                                "value": "76d7fd1c-222b-4d29-98c2-b3888c8b37aa"
                            }
                        ]
                    }
                },
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "e3d8e009-0a1e-49b9-8a10-9f4bfce06ab2"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "36b6cc9a-f204-4b36-82f0-ff70895f4ef1",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "field",
                            "value": "36b6cc9a-f204-4b36-82f0-ff70895f4ef1"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "9cbd6aa0-d227-4293-84c8-79a5b78b1ff0",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "field",
                            "value": "9cbd6aa0-d227-4293-84c8-79a5b78b1ff0"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "f02b2807-623e-4709-9994-77646fd738fc",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "field",
                            "value": "f02b2807-623e-4709-9994-77646fd738fc"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "25306b50-d96a-4a4f-aba2-055b4a9bd8d7",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "field",
                            "value": "25306b50-d96a-4a4f-aba2-055b4a9bd8d7"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "bbc5dd89-a52c-421f-9ac0-376b18e4a8a7",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "field",
                            "value": "bbc5dd89-a52c-421f-9ac0-376b18e4a8a7"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "a6a2c668-6c42-4eda-bfc4-817b96be6d6e",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "field",
                            "value": "a6a2c668-6c42-4eda-bfc4-817b96be6d6e"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "febfb078-f020-4152-95b9-1305a658fe47",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "field",
                            "value": "febfb078-f020-4152-95b9-1305a658fe47"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "431b242f-98d0-4c99-ab61-7353efc69c47",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "field",
                            "value": "431b242f-98d0-4c99-ab61-7353efc69c47"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "0066ff4e-aed4-4713-8033-55b987c9cde5",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "field",
                            "value": "0066ff4e-aed4-4713-8033-55b987c9cde5"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "9b25bec0-b900-47fc-8fd0-7f10622a915b",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "field",
                            "value": "9b25bec0-b900-47fc-8fd0-7f10622a915b"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "cf71ca66-9c23-46a5-b42f-6a4a7aa40090",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "field",
                            "value": "cf71ca66-9c23-46a5-b42f-6a4a7aa40090"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "044910db-dfff-4a33-9df6-d07f69826e86",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "field",
                            "value": "044910db-dfff-4a33-9df6-d07f69826e86"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "5e8bb155-d539-468e-988a-a664ac64b468",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "field",
                            "value": "5e8bb155-d539-468e-988a-a664ac64b468"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "0088e045-2ad5-49a3-b2e6-c737207ac5dc",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "field",
                            "value": "0088e045-2ad5-49a3-b2e6-c737207ac5dc"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "6ad6d4d0-33fc-4ebe-8a07-2b31c5e962b7",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "field",
                            "value": "6ad6d4d0-33fc-4ebe-8a07-2b31c5e962b7"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "e3d8e009-0a1e-49b9-8a10-9f4bfce06ab2",
            "actions": [
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "3560b289-68a2-4898-9527-d6ce89e3bf24"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "d83c3f13-8bdc-47d4-9c97-391bc2a670b8",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_control"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_demand"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_recognition"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "organizational_culture"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "social_support"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "constant",
                            "value": 6
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Great! You're averaging a very healthy well-being score."
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 83
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Good job! You're averaging a healthy well-being score. "
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 66
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Something's going on. You're averaging a poor well-being score. "
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 33
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Time to reflect and review! You're averaging an extremely poor well-being score."
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 17
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Awesome! You're averaging at an extremely healthy well-being score"
                        }
                    },
                    "condition": {
                        "op": "greater_equal_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 83
                            }
                        ]
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "383ef77a-e0a6-4ddf-8117-bb5bc563f843"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "3560b289-68a2-4898-9527-d6ce89e3bf24",
            "actions": [
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_control"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_demand"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_recognition"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "organizational_culture"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "add",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "variable",
                            "value": "social_support"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "constant",
                            "value": 6
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "score"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Great! You're averaging a very healthy well-being score."
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 83
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Good job! You're averaging a healthy well-being score. "
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 66
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Something's going on. You're averaging a poor well-being score. "
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 33
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Time to reflect and review! You're averaging an extremely poor well-being score."
                        }
                    },
                    "condition": {
                        "op": "lower_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 17
                            }
                        ]
                    }
                },
                {
                    "action": "set",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "description"
                        },
                        "value": {
                            "type": "constant",
                            "value": "Awesome! You're averaging at an extremely healthy well-being score"
                        }
                    },
                    "condition": {
                        "op": "greater_equal_than",
                        "vars": [
                            {
                                "type": "variable",
                                "value": "score"
                            },
                            {
                                "type": "constant",
                                "value": 83
                            }
                        ]
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "multiply",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "constant",
                            "value": 16.66
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "2e5137af-189f-4e5c-9b7c-c0f5ae342bc3",
            "actions": [
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_demand"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_satisfaction"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_recognition"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "job_control"
                        },
                        "value": {
                            "type": "constant",
                            "value": 2
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "social_support"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                },
                {
                    "action": "divide",
                    "details": {
                        "target": {
                            "type": "variable",
                            "value": "organizational_culture"
                        },
                        "value": {
                            "type": "constant",
                            "value": 3
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        }
    ],
    "created_at": "2022-06-08T04:23:05+00:00",
    "last_updated_at": "2022-07-20T10:57:38+00:00",
    "published_at": "2022-06-08T05:38:17+00:00",
    "_links": {
        "display": "https://3oms1jii0jw.typeform.com/to/YbRGZKzc" //Need change for each survey (Random string gen maybe)
    }
}

module.exports = template