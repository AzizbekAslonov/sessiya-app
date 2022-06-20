const realSciences = [
   // 'Dasturlash',
   // 'Geometriya',
   // 'Tarix',
   'English',
]

const ALL_QUESTIONS = {
   English: {
      "questions": [
         "Matching of  the sentences and their endings. If  a new method of curing cancer had been worked out , ",
         "Matching of  the sentences and their endings. If the scientist hadn’t  invented the equipment which helps to measure the distance from the Earth to the Sun,",
         "Matching of  the sentences and their endings. If there hadn’t been a telescope,",
         "Matching of  the sentences and their endings. If  I had had enough money, ",
         "Although the sun was shining, it was still cold, because it ______hard for two hours.",
         "She______at the parcel long enough, before she______that it was for her brother.",
         "We were good friends, we______each other for years.",
         "Complete the quote  with the correct word. A ship in a harbor is  ………  but  that’s not why  ships were built.",
         "What does the highlighted word refer to?  When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see “the one” that has been opened for us.",
         "Choose the missing verb:  It’s all part of life’s journey which _____  you the knowledge you need for your next adventure.",
         "Arrange the words below to make a well-known quote about taking risks:",
         "Fill in the gap with an appropriate answer. If you know ________ you’re going you’ll navigate your way through the harshest hurricane.",
         "Fill in the gap with an appropriate answer.  He warned me two weeks ago that’s _____  I have been looking for a room to stay but still have no results.",
         "Fill in the gap with an appropriate answer.  It’s all part of life’s journey which gives you the  knowledge you __________ for your next adventure.",
         "Fill in the gap with an appropriate answer.  I’ve never seen a fire ______ this.",
         "Fill in the gap with an appropriate answer.  Now I don’t know ________  to do.",
         "Choose the best definition to the word: “ damage”",
         "Choose the best definition to the word: “ reduce”",
         "Choose the best definition to the word: “ misunderstanding”",
         "Choose the best definition to the word: “secure”",
         "Find the synonym of the word: ” ignorance”",
         "Find the synonym of the word: ”reduce”",
         "Find the synonym of the word: “major”",
         "Find the synonym of the word: “comprehensive”",
         "Find the synonym of the word: “responsible”",
         "Find the synonym of the word “reply”",
         "Find the synonym of the word: “irrational”",
         "Find the synonym of the word: “avoid”",
         "Find the antonym of the word: “flexible”",
         "An hour in the morning _____.",
         "\"While there is _____ there is hope.\"",
         "Find the synonym of the word:”employ”",
         "Find the synonym of the word:”run”",
         "Find the synonym of the word:”entry”",
         "Find the synonym of the word:’”view”",
         "Find the synonym of the word: ”goal”",
         "Find the synonym of the word:”employee”",
         "Find the synonym of the word:”staff”",
         "Find the synonym of the word:”management”",
         "Find the antonym of the word:”strength”",
         "Find the antonym of the word:”simple”",
         "Fill in the gaps with the appropriate preposition. HR planning is a key activity … business.",
         "Fill in the gaps with the appropriate preposition. What training is necessary … improve skills?",
         "Fill in the gaps with the appropriate preposition.HR planning is a critical element … your business plan.",
         "Fill in the gaps with the appropriate preposition. How long does it take… retrain professionals?",
         "Fill in the gaps with the appropriate preposition. Which strategies help …establish good planning?",
         "Fill in the gaps with the appropriate preposition. You need … recognize the preliminary goals ….your plan.",
         "Fill in the gaps with the appropriate article. I’m responsible for … effective planning.",
         "Fill in the gaps with the appropriate article. HR planning is… key activity for business.",
         "Fill in the gaps with the appropriate article. HR planning is … critical element of your business plan.",
         "Fill in the gaps with the appropriate article. Can those skills be used in other areas of … business?",
         "Fill in the gaps with the appropriate article. HRM is … important staff function for business.",
         "Fill in the gaps with the appropriate article. You should listen to each member of …group.",
         "Choose the appropriate reporting verb. ”Please, please don’t tell anyone!” The worker_______ not to tell anyone.",
         "Choose the appropriate reporting verb. ”Don’t forget to phone the director of the oil company.” The secretary _____ me to phone the director of the oil company.",
         "Choose the appropriate reporting verb.   ”I’m sorry I didn’t come to the meeting.” He ____ for not going to the meeting.",
         "Choose the synonym to the underlined words: Want, desire, demand",
         "Choose the synonym to the underlined word.Tool, instrument, utensil",
         "Choose the synonym to the underlined words: Vast, huge, enormous",
         "Choose the synonym to the underlined words: Outbreak, achievement",
         "Choose the synonym to the underlined word.Eventually, finally",
         "Complete the sentence.  The thing we would like ____ do is speculation, but not philosophical issue _____  the topic.",
         "Choose the best preposition to fill in the gap.First computers were huge ____ size.",
         "Matching of  the sentences and their endings. If doctors had invented another type of injection,",
         "Find the antonym of the word: “main”",
         "Find the antonym of the word: “movement”",
         "Find the antonym of the word: “leader”",
         "Find the antonym of the word: “organize”",
         "Find the antonym of the word: “find”",
         "Find the antonym of the word “include”",
         "Find the antonym of the word: “connect”",
         "Choose the correct answer. I think we ________ trust our people",
         "Choose the correct answer.  You have caught a cold. I think you _____ go back to bed",
         "Choose the correct answer. I think you  _______ listen to him.",
         "Choose the correct answer. It is very kind of you. I think we ________ come.",
         "Choose the correct answer. I think you ________   wait for her.",
         "Put the preposition. Work  ____  groups 4 or 5.",
         "Put the preposition. There are many risk types, major ones  ____  consider are: Physical, Reputation, Emotional, Financial, Facilities.",
         "What is the responsibility the career of the doctor?",
         "The Olympic flag  has …   .",
         "If a woman had  received  newly invented type of injection, she …",
         "If  this mobile phone hadn’t had all  modern functions ……   . ",
         " If Karim hadn’t  forgotten to pay the bill, ",
         "What is the meaning of   this “HR”?",
         "Give the definition  the  word  of   the  “review materials”.",
         "Give the definition  the  word  of   the  “ scan for ”.",
         "Complete the sentences. If  I were   a carpenter,__________________.",
         "Speak louder,  please. It’s too noisy in  the street, I can’t hear………….",
         "Find the definition of the word “ premium”",
         "Find the definition of the word “instructor”",
         "How is your mother? I ... her for a week or two.",
         " The woman.....  to my sister is our  neighbor, who ....across  the street.",
         " The woman is  too old . She .... walk well.",
         " I am not as clever as you, so  __________________________________.",
         "Match this word  “Enable”!",
         "Matching the word of the “catch on”",
         "Match the word “ look  up to”",
         " Match  the word  “ give in ”.",
         " Complete  the sentences.  I ___________ twenty emails  so far today.",
         "Paraphrase the following sentence: She agreed to make a report.",
         "Paraphrase the following sentence: He apologized for hurting my leg.",
         "Paraphrase the following sentence: He congratulated me on passing  the exam.",
         "Paraphrase the following sentence: They announced that they were getting married.",
         "Paraphrase the following sentence: He refused to admit that the argument was true.",
         "Paraphrase the following sentence: She persuaded him to do it.",
         "Paraphrase the following sentence: They accused him of going bankrupt.",
         "Paraphrase the following sentence: He offered to have dinner with them. ",
         "Paraphrase the following sentence: He denied rewriting his CV.",
         "Paraphrase the following sentence: He reminded me not to forget to phone.",
         "Paraphrase the following sentence: He insisted on going to the café. ",
         "Paraphrase the following sentence: He promised to be polite with the staff. ",
         "Change the direct speech into indirect speech. “Please, please don’t tell anyone”",
         "Find the synonym to the following word or phrase: “remuneration”",
         "Find the synonym to the following word or phrase: “personnel”",
         "Find the synonym to the following word or phrase: “inspect”",
         "What is a cover letter?",
         "Change the direct speech into indirect speech: “Well, if I were you I’d start saving for my retirement” ",
         "Change the direct speech into indirect speech: “I’m afraid I’ve got some bad news. The company is closing.”",
         "Change the direct speech into indirect speech: “We lost much money because of the irresponsible manager!”",
         "What is the responsibility?",
         "Choose the best definition to the word - responsibility?",
         "Choose the synonym to the underlined word –Accomplish ",
         "His father _____ , but Bill’s father _____ smoke.",
         "Find the word which belongs to work place?",
         " Choose the synonym to the underlined word “dedication” ",
         "Fill in the blanks with personality adjectives. The teacher felt very……when all her students passed exams. ",
         "Fill in the blanks with personality adjectives. Farida is very…… I`m sure you will love her.",
         "Fill in the blanks with personality adjectives. She is usually ………and understanding.",
         "Fill in the blanks with personality adjectives. Karima rarely gets …….with people.",
         "Fill in the blanks with personality adjectives. Zamira was……. than Laylo, and more……too. She was…….of Laylo. ",
         "Fill in the blanks with personality adjectives. Anvar never helps his coworkers with their job. He is so…………",
         "……………refers to the object.",
         "……………refers to the people.",
         "……………refers to the place.",
         "……………refers to the time.",
         "Find the synonym of the word “message”.",
         "Choose the word out of grammatical meaning.",
         "Choose the word or word combination out of logical meaning.",
         "Choose the word or word combination out of grammatical meaning.",
         "Choose the word or word combination out of grammatical meaning.",
         "Complete the sentence with appropriate pronoun. I told you about the woman ………… lives next door.",
         "Complete the sentence with appropriate pronoun. Do you see the cat ………… is lying on the roof?",
         "Complete the sentence with appropriate pronoun. Do you know the boy ……………. mother is a nurse?",
         "Complete the sentence with  appropriate pronoun. I was invited by the professor ……………. I met at the conference.",
         "Find the synonym of the word “service”.",
         "Find the synonym of the word “management”.",
         "Find the synonym of the word “competition”.",
         "Find the synonym of the word “client”.",
         "Complete the sentence with appropriate pronoun. The driver ……… ran the stop was careless",
         "Complete the sentence with appropriate pronoun. The children, ………… we love dearly, need better educations",
         "Complete the sentence with appropriate pronoun. Never go to a doctor ………… office plants have died.",
         "Complete the sentence with appropriate pronoun. The book, ………..is now out of print, has all the information you need.",
         "Complete the sentence with appropriate pronoun. The term networking, ……….. has appeared in popular speech, refers to using or even developing social networks.",
         "Complete the sentence with appropriate pronoun. The individuals ………. first used the new technology accumulated great wealth.",
         "Complete the sentence with appropriate pronoun. Rachel liked the new chair …………was very beautiful.",
         "Complete the sentence with appropriate pronoun. I don’t like the clown………has a bright red nose.",
         "Complete the sentence with appropriate pronoun. It is made up of a fabric ………is very soft.",
         "His hobby of playing computer games has turned into _________ and he spent hours in front off a computer.",
         "Choose the appropriate phrasal verb to complete the sentence .Don't waste time _________things that have caused you distress.",
         "Choose the best synonym to the underlined phrasal verb in the sentence. His teacher was a model for him, he was someone to “look up to”.",
         "The kids were ________________the arrival of their mother after a ten months study abroad. They were counting days and waiting impatiently to be together.",
         "Choose the appropriate preposition. Do not read other people’s mail ________ their permission. Going ______ other people’s things could cost' you your job or you could even go _____ jail.",
         "Choose the appropriate preposition. I used to chatting ________ my on-line friends ______ nonsense.",
         "Choose the synonym to the  word. Additional readings and alternative sources “undoubtedly” create a richer understanding",
         "Choose the best definition to the  word. When working with a single source you may “stumble upon” unclear information.",
         "Which of the following cannot be included into online behavior?",
         "Choose the best antonym to the word in the sentence. All of them are “essential” and somehow connected to each other. ",
         "Choose the best definition to the word. “Subsequently”, picking up information here is much more challenging then in short and well- structured texts. ",
         "Choose the synonym to the  word. I was so delighted when my father “gifted” me a laptop full of modern software and you know, moreover it was connected to Internet via Wi-Fi. ",
         "What is a strategy?",
         "Choose the definition to the underlined word in the sentence.  Our deeds, actions, achievements even falls are controlled or just “formulated” by our life strategies as well! ",
         "Choose the appropriate phrasal verb to complete the sentence. We _________________all the books, and this was still the one we liked best.",
         "Choose the appropriate synonym to the word. David Grey will submit this letter to you, along with other supporting documents to assure you that he will return “prior to” the expiration of his stay in Uzbekistan. ",
         "Which of the following phrases can be used in closing part of an e-mail?",
         "Choose the appropriate antonym to the word.  Furthermore, multiple sources can greatly “improve” and dress experience of learners if they know how to use them properly. ",
         "Choose the synonym to the word in the sentence. Stahl, et all found that using multiple text-sourcescan only be effective if we are taught to use them “properly”. ",
         "Choose the appropriate synonym to the  word. The information was used “confidentially”. ",
         "Choose the best word to fill in the gap. What is an _____________ ____________? Simply, we can say that it is someone else’s intellectual working results such as musical, literary, and artistic works; discoveries and inventions; and words, phrases, symbols (trademarks), and designs. ",
         "Choose the appropriate for of the verb to fill in the blank. “The only thing _______ between you and your dreams is reluctance.” (Carroll Bryant) ",
         "Choose the synonym to the  word. Over 600,000 learners a year come to Britain to help achieve their “ambition”, to experience modern UK life. ",
         "Choose the appropriate word to fill in the gap. Use your working time __________so that you are able to do more in short period of time.",
         "Choose the synonym to the underlined word. Make sure your abilities are “compatible”  with your long term goals.",
         "Choose the appropriate definition to the underlined word. Information from different sources arouses students’ “curiosity” and increases their comprehension ",
         "Choose the synonym to the underlined word. I have been trying to avoid “confrontation” with my colleagues keeping my temper. ",
         "Choose the best synonym to the underlined word in the sentence “The only thing standing between you and your dreams is “ reluctance”.” ",
         "Which of the following is not considered appropriate in Netiquette?",
         "Choose the best synonym to the underlined phrase. This preparation helps them to “cope with” any task. ",
         "Choose the best definition of the word “to identify”.",
         "Choose the antonym to the underlined word. The speaker's intentions were not made “explicit”.",
         "Choose the best antonym to the underlined word in the sentence. This is the road map that will take you from choosing a career to “succeeding” in it.",
         "Choose the best paraphrase of the given sentence.  It’s fairly simple to state a goal but actually achieving it isn’t quite as easy.",
         "Choose  the appropriate definition to the underlined word. Attack to information is penetrating into one’s PC and monitoring, “snooping”, spying, stealing information and so on.",
         "Choose the best paraphrase of the given sentence. File swapping with your friend is also against law.",
         "Choose the best antonym to the underlined word. According to the experience of developed countries the client service is the “crucial”  factor which provides economic and social stability in all areas of social advancement. ",
         "Choose the verb that is the most appropriate to fill the gap. You will start ___________a large car producing company soon, so I would like to give you some essential ideas in management that I have experienced. ",
         "Choose the best synonym to the underlined word. This way your company will stand a strong “rivalry” in the car market.",
         "  I have to do so much reading, and home ………….., which include essays.  ",
         " - So what was your overall score?  - Oh, I can`t tell you. I am too ………………..",
         " You`d better ………………..in a practice course soon.",
         " How did you ……….. proficiency  level test in English?",
         " We …………… possible topics like that in the practice course. You only need to make 2 or 3 main points about a topic, you know, because the Proficiency test essay task is only 250 words long.",
         " You really ought to be in contact with English-speaking people every day, if you want to ……………….your English fast.",
         " You pretend that you`re in a situation, and then you have to ask questions to find out some………………….",
         " Study the material and put it into practice. Be always inspired and…………………...",
         " Never ……….. with the first alternative or solution. ",
         " ………………………….  are great for inspiration.",
         " Fellow learners study skills and creativity can push your boundaries and ………………….your learning horizon.",
         " Read the texts and check your ………………………. or listen to the tape and revise your listening skills. ",
         " Give antonym to the word “confidence”. ",
         " Give antonym to the word “ skilled”.",
         "You can ……………a video and put it on YouTube to share with your attendees.",
         " Practice lessons and workshops are the fastest way to learn which tools you need to ………………..a better language user.",
         " Workshops and master classes can give you fresh ………….and other perspectives to take it to another level.",
         " Read the texts and check your comprehension or listen to the tape again and ………………… your listening skills. ",
         " Choose the appropriate form of adjectives.  They promised us to send the ... information on this matter in a week.",
         " Yesterday they ..... to help their friends.",
         "Find the right definition to the word “motivation”",
         "Types of motivation are…..",
         "Find the right definition to the following word: “competency”",
         "Match the verb and the word it collocates  with  “to stay”",
         "Match the verb and the word it collocates with  “To gather”",
         "Match the verb and the word it collocates  with “to improve”",
         "Choose the right word to the following definition: “the state of having no food for a lot something”",
         "Choose the right word to the following definition : “an encouragement or a feeling of stimulation which pushes people to have better results in life”.",
         "Choose the suitable definition to the “to consume”  ",
         "“The undesired but common and expected consequence is the “heating” of the ocean water near the plant.” Antonym for the word in bold is:",
         "Choose the synonym to the underlined word: “She “persuaded” him to do it”",
         "“The other technology which has stirred the public “imagination” in this century is the cloning of animals.” Which of the following is a synonym to the word in bold?",
         "Find a synonym to the word “pollution”",
         "“One of the innovations - the Internet has already had an impact on a human life “significantly”.” The word in bold can be replaced by:",
         "     Change the sentence into an indirect speech: “Sayyora, please be careful while interviewing new workers.” He told Sayyora__________________________ while interviewing new workers ",
         "We use linking phrases as “for example, such as, for instance” for ………..",
         "We use linking phrases as “although, on the other hand, however” for….",
         "Water pollution, air pollution, the depleting of Ozone layer, deforestation  belong to the……….",
         "Give the definition the following word “aid”",
         "Complete the sentences with the word. She………… the red umbrella above her head.",
         "Give the definition the following word “advice”",
         "Give the definition the following word “recover”",
         "Give the definition the word “belief”",
         "Give the definition the following word “debt”",
         "Give the definition the following word: “affect”",
         "Choose the appropriate antonym. Tom is very “lazy”.",
         "Choose the appropriate antonym.  “Lend “",
         "Choose the appropriate answer.  The police … Dan when he … a shop.",
         "Choose the appropriate synonym “extend”",
         "Choose the appropriate synonym “goal setting”",
         "Fill the gap: If somewhere there is an ideological gap, it is ……. ruled over by an alien ideology.",
         "Fill in the sentences with the appropriate forms of the verb. English…………..a single international communication tool",
         "Fill the gap: Additional readings and alternative sources………… create a richer understanding.",
         "Choose  the synonym: “development”",
         "Choose the synonym : “to belong ”",
         "We learn from failure, not from ………..",
         "Choose  the synonym : “to improve”",
         "Choose the synonym : “to make up one’s mind”",
         "Choose the antonym : “to succeed” ",
         "Choose the correct form of the verb. Students …… so much time on learning new words by heart.",
         "Choose the synonym: “point of view”",
         "Choose the correct form of the verb. The number of English speakers……….. recently.",
         "Choose the correct form of the verb. Umar……….on the beach with his family next week at this time. ",
         "Choose the correct form of the verb. Experts……….. surely …….their work by the end of the next month.",
         "Fill the gap: Additional readings and alternative sources…………create a richer understanding.",
         "Choose the appropriate definition of the following word:  “memorize”",
         "Change the direct speech into indirect speech using appropriate reporting verb. “Don’t forget to phone the director of the oil company. ” The ecretary………….me to phone the director of the oil company. ",
         "Change the direct speech into indirect speech using the appropriate reporting verb. “I am sorry I didn’t come to the meeting .” He ………. for not going to the meeting.",
         "Change the direct speech into indirect speech using the appropriate reporting verb. “If you are late again we will start without you. ” They………….to start without him.",
         "Change the direct speech into indirect speech using the appropriate reporting verb. “I am afraid I’ve got some bad news. The company is closing.” The manager………. that the company was closing .",
         "Change the direct speech into indirect speech using the appropriate reporting verb. “We lost so much money because of the irresponsible manager!” The  executive director ………the manager for losing  much money. ",
         "Read the following sentence and match with its ending. If they offer me the job …….",
         "Read the following sentence and match with its ending. If you are professional  in your field ……..",
         "Match the words and definitions:  An incident",
         "Match the words and definitions:  “a reason”",
         "Match the words and definitions:   “a likelihood”",
         "Fill in the gaps with suitable words  «Professional development keeps changes,…….our skills and be more effective in our ……..  .»",
         "Choose the appropriate definition.”To identify”",
         "Choose the appropriate definition.”to acquire”",
         "Choose the appropriate definition. “a goal”",
         "Choose the appropriate definition. “to comprehend”",
         "Choose the appropriate definition. “Teamwork”",
         "Choose the appropriate definition.  “Cooperative thinking”",
         "Find  synonym to  the  word  “manage”  ",
         "Choose the appropriate definition  “ A tool”",
         "Find the synonym to the verb“ To help”",
         "Fill in the gaps with suitable words  ” To use  ……. knowledge is one the basic data of task-based strategy.  ”",
         "Fill in the gaps with suitable words  ”All specific features of learning …..can help for setting ….in future language learning process.",
         "Find  the synonym to the verb  “To learn” ",
         " Find the synonyms  to the word “ leadership”",
         "Fill in the gaps with suitable words  ” Personalizing strategy assists students to bring information …..to his or her personel feelings,ideas. ",
         "Fill in the gaps with suitable words  ” Organizing strategies is responsible for …. or arranging some educational issues”.",
         "Find  the  synonyms to the  word  ”essential ”",
         "Find  the  synonym to the verb “ To invent  ”",
         "Fill in the gaps with suitable words  ”Effective and important …..to learning can help a person to professionally.",
         "Use the appropriate modal verbs: “Students …..learn to set proper goals in their studying.”  ",
         "Use the appropriate modal verbs:  “ These young learners …. know  a lot of  things about learning strategies.”",
         "Use the appropriate modal verbs: “ How did Rustam ….. change the whole strategies of the group on his own?!”",
         "Choose the appropriate definition”We are getting married”",
         "Use the appropriate modal verbs: ” Everyone … analyze his/her errors with the help of monitoring strategies”",
         "Write the synonyms to the word “career paths”",
         " Write the synonyms to the word “goal setting”",
         "Write the synonyms to the word”peer observation”",
         " Write the synonyms to the word “co-planning”",
         "Write the synonyms to the word “mentoring”",
         "Professional development keeps changes-----our skills and be more affective in our work.",
         "Professional development can be part of meeting targets set by workface performance management----- or an opportunity for individuals to change their career paths.",
         "21 century is the era of technology . Legislative, -----and economic developments directly affect the environment.",
         "The fifth phase is----- and sharing expertise.",
         "Read the texts and check your comprehension or listen to the tape again and………….your listening skills.",
         "His hobby of playing computer games has turned into _________ and he spent hours in front off a computer.",
         "Choose the appropriate phrasal verb to complete the sentence.Don't waste time _________things that have caused you distress.",
         "Choose the best synonym to the underlined phrasal verb in the sentence.His teacher was a model for him, he was someone to “look up to”.",
         "Choose the synonym to the underlined word. Additional readings and alternative sources “undoubtedly” create a richer understanding",
         "Choose the best definition to the underlined word. When working with a single source you may “stumble upon“ unclear information.",
         "Choose  the appropriate definition to the underlined word. She has always been “available” for problems during the lessons and outside the lessons. ",
         "Choose the synonym to the underlined word. Over 600,000 learners a year come to Britain to help achieve their “ambition”, to experience modern UK life. ",
         "Choose the appropriate word to fill in the gap. Use your working time __________so that you are able to do more in short period of time.",
         "Choose the best synonym to the underlined word in the sentence “The only thing standing between you and your dreams is  “reluctance”.” ",
         "Which of the following is not considered appropriate in Netiquette?",
         "Choose the best synonym to the underlined phrase. This preparation helps them to “cope with” any task. ",
         "Choose the best definition of the word “to identify”.",
         "Choose the antonym to the underlined word. The speaker's intentions were not made “explicit”.",
         "Choose the best antonym to the underlined word in the sentence. This is the road map that will take you from choosing a career to “succeeding” in it.",
         "Choose the best paraphrase of the given sentence.  It’s fairly simple to state a goal but actually achieving it isn’t quite as easy.",
         "Choose the best antonym to the underlined word. According to the experience of developed countries the client service is the “crucial”  factor which provides economic and social stability in all areas of social advancement. ",
         "Choose the verb that is the most appropriate to fill the gap. You will start ___________a large car producing company soon, so I would like to give you some essential ideas in management that I have experienced. ",
         "Choose the best synonym to the underlined word. This way your company will stand a strong “rivalry” in the car market.",
         " How did you take ……………….. level test in English?",
         " I thought the proficiency test writing tasks were ………….hard to understand.",
         "- So what was your overall score?  - Oh, I can`t tell you. I am too ………………..",
         " You`d better ………………..in a practice course soon.",
         " Go somewhere to a quiet place, a bank of the river and ……………the sunrise or sunset.",
         " This can give you an ………………. productivity boost to work on your own study or to work harder on your chops.",
         " Study the material and put it into ………………….. Be always inspired and motivated.",
         " There is one advantage that could …………………. those not raised in the digital age from ever conducting a meeting online- the fact that you can always see your attendees.",
         "  There is one …………………… that could encourage those not raised in the digital age from ever conducting a meeting online- the fact that you can always see your attendees.",
         " There is one advantage that could encourage those not raised in the digital age from ever conducting a ……………… online- the fact that you can always see your attendees.",
         " How did you ………..proficiency  level test in English?",
         " You really ought to be in contact with English-speaking people every day, if you want to ……………….your English fast.",
         " You pretend that you`re in a situation, and then you have to ask questions to find out some………………….",
         " You`d better enroll in a practice course ……………….",
         " Go somewhere to a …………….. place, a bank of the river and behold the sunrise or sunset.",
         " This ………… give you an enormous productivity boost to work on your own study or to work harder on your chops.",
         " Study the material and put it into practice. Be always inspired and…………………...",
         " My granny is ill and I … visit her. ….I leave school earlier today?",
         "I'll give you my phone number______you want to speak to me.",
         " Being able to …………….. a big problem is a valued trait for anyone, especially sales people.",
         " Fellow learners study skills and creativity can push your boundaries and ………………….your learning horizon.",
         " Workshops and master classes ………… give you fresh ideas and other perspectives to take it to another level.",
         " Read the texts and check your ………………………. or listen to the tape and revise your listening skills. ",
         " Give antonym to the word “confidence”. ",
         " Give antonym to the word “ skilled”.",
         "You can ……………a video and put it on YouTube to share with your attendees.",
         " Fellow learners study skills and creativity ………… push your boundaries and expand your learning horizon.",
         " Practice lessons and workshops are the fastest way to learn which tools you need to ………………..a better language user.",
         " Workshops and master classes can give you fresh ………….and other perspectives to take it to another level.",
         " Read the texts and check your comprehension or listen to the tape again and ………………… your listening skills. ",
         "  The woman .....to my  sister is  our neighbor, who ....across the street.                                                 ",
         " When we....to  the  stadium  two teams....football.                                                                                                    ",
         "Choose the synonym to the underlined word: “She “persuaded” him to do it”",
         "“The undesired but common and expected consequence is the “heating” of the ocean water near the plant.” Antonym for the word in bold is:",
         "Complete the sentences with the word. She………… the red umbrella above her head.",
         "Give the definition the following word “advice”",
         "Give the definition the following word “recover”",
         "Put the words in the correct order to make sentences. air / blows / into / the / the / The / ticket / wind .",
         "Give the definition the word “belief”",
         "People seem…. in different ways.",
         "Choose the appropriate answer.  The police … Dan when he … a shop.",
         "Choose the appropriate synonym “extend”",
         "Choose the appropriate synonym “goal setting”",
         "Give the definition to the following words “To extend”",
         "Give the definition to the word “opportunity”",
         "Give the definition to the word “Target”",
         "Match the words  with the appropriate definitions: To alter",
         "Find the right definition to the following word “aid”",
         "Fill the gap: If somewhere there is an ideological gap, it is ……. ruled over by an alien ideology.",
         "Fill in the sentences with the appropriate forms of the verb. English…………..a single international communication tool",
         "Fill the gap: Additional readings and alternative sources………… create a richer understanding.",
         "Choose the correct form of the verb. Students ………. so much time on learning new words by heart .",
         "Choose  the synonym: “development”",
         "Find the synonym to the following definition” Try to find something”",
         "Math the word with its definition  “to identify”",
         "Math the word with its definition  “A bug”",
         "Choose the synonym : “to belong ”",
         "We learn from failure, not from ………..",
         "Find the right definition to the following word “advice”",
         " Find the right definition to the following word: “browse internet”",
         "Choose the synonym to the word “up to date”",
         "Choose the correct form of the verb. In my article I……………. to run through some of the main points of the matter. ",
         "Choose the correct form of the verb. Experts………..surely …….their work by the end of the next month."
      ],
      "answers": [
         [
            "a lot  people would have been saved.",
            "professor Rahimov’s group wouldn’t have managed to beat the world’s  foremost scientific institutes in the race to produce the blue laser.",
            "we would never have known that it comprises about 149 million kilometers.",
            "it would have been less harmful for the health ."
         ],
         [
            "professor Rahimov’s group wouldn’t have managed to beat the world’s  foremost scientific institutes in the race to produce the blue laser.",
            "a lot  people would have been saved.",
            "we would never have known that it comprises about 149 million kilometers.",
            "it would have been less harmful for the health ."
         ],
         [
            "we would never have known that it comprises about 149 million kilometers.",
            "a lot  people would have been saved.",
            "we would never have had photographs of distant galaxies.",
            "professor Rahimov’s group wouldn’t have managed to beat the world’s  foremost scientific institutes in the race to produce the blue laser."
         ],
         [
            "I would have bought a space shuttle and traveled  to the Moon.",
            "we would never have known that it comprises about 149 million kilometers.",
            "we would never have had photographs of distant galaxies.",
            "a lot  people would have been saved."
         ],
         [
            "is raining",
            "had been raining",
            "was raining",
            "had rained"
         ],
         [
            "had been looking, had understood",
            "had been looking, understood",
            "was looking, had understood",
            "was looking, understood"
         ],
         [
            "had knowing",
            "were knowing",
            "had known",
            "Know"
         ],
         [
            "in danger",
            "Big",
            "Dangerous",
            "Safe"
         ],
         [
            "opened door",
            "closed  door",
            "Sadness",
            "Misery"
         ],
         [
            "Takes",
            "Captures",
            "Gives",
            "Accepts"
         ],
         [
            "That’s not why  ships were built  a ship in a harbour is  safe.",
            "A ship is  safe  but  that’s not why  ships were built.",
            "A ship in a harbour were built but  that’s not why  ships is  safe.",
            "A ship in a harbor is  safe  but  that’s not why  ships were built."
         ],
         [
            "Where",
            "Whose",
            "What",
            "Which"
         ],
         [
            "whose",
            "Why",
            "which",
            "where"
         ],
         [
            "need",
            "could",
            "Can",
            "should"
         ],
         [
            "while",
            "like",
            "since",
            "As"
         ],
         [
            "what",
            "That",
            "which",
            "where"
         ],
         [
            "profit gained from something",
            "is the state of being in a better position",
            "physical harm that is caused to an object",
            "the money that they earn or receive"
         ],
         [
            "move from a lower position to a higher one; come or go up",
            "become or make greater in size, amount, or degree",
            "increase in economic activity or value",
            "make smaller or less in amount, degree, or size"
         ],
         [
            "showing approval of or favour towards an idea or action",
            "the ability to understand something; comprehension",
            "to be expected; natural, reasonable, or forgivable",
            "a failure to understand something correctly"
         ],
         [
            "modest or shy because of a lack of self-confidence",
            "certain to remain safe and unthreatened",
            "uncertain or anxious about oneself; not confident",
            "feeling or showing distrust of someone or something"
         ],
         [
            "Familiarity",
            "Unawareness",
            "Acquaintance",
            "Awareness"
         ],
         [
            "Advance",
            "Raise",
            "Diminish",
            "Elevate"
         ],
         [
            "Considerable",
            "Inconsiderable",
            "Insignificant",
            "Negligible"
         ],
         [
            "Imperfect",
            "Partial",
            "Incomplete",
            "Complete"
         ],
         [
            "Liable",
            "Unaccountable",
            "Irresponsible",
            "Nonaccountable"
         ],
         [
            "Answer",
            "query",
            "question",
            "Inquiry"
         ],
         [
            "Valid",
            "Logical",
            "Illogical",
            "Rational"
         ],
         [
            "Encounter",
            "Face",
            "Catch",
            "Escape"
         ],
         [
            "variable",
            "adaptable",
            "elastic",
            "unchangeable"
         ],
         [
            "as near as today and tomorrow",
            "is worth two in the evening",
            "has wings",
            "is better than richness"
         ],
         [
            "love",
            "life",
            "will",
            "wish"
         ],
         [
            "Hiring",
            "Entry",
            "Run",
            "Dismissal"
         ],
         [
            "Conduct",
            "Entry",
            "Employ",
            "Run"
         ],
         [
            "Dismissal",
            "Input",
            "Employ",
            "Run"
         ],
         [
            "Questioning",
            "Dismissal",
            "Run",
            "Vision"
         ],
         [
            "Purpose",
            "Run",
            "Questioning",
            "Dismissal"
         ],
         [
            "Manager",
            "Worker",
            "Employer",
            "Supervisor"
         ],
         [
            "Planning",
            "Personnel",
            "Management",
            "Responsibility"
         ],
         [
            "Employee",
            "Leadership",
            "Mission",
            "Responsibility"
         ],
         [
            "Grow",
            "Plan",
            "Weakness",
            "Goal"
         ],
         [
            "Responsible",
            "Strong",
            "Complicated",
            "Safe"
         ],
         [
            "Near",
            "For",
            "Through",
            "Behind"
         ],
         [
            "On",
            "For",
            "In",
            "To"
         ],
         [
            "Below",
            "At",
            "Near",
            "Of"
         ],
         [
            "For",
            "To",
            "In",
            "On"
         ],
         [
            "In",
            "On",
            "To",
            "At"
         ],
         [
            "At/at",
            "In/for",
            "At/on",
            "To/of"
         ],
         [
            "A",
            "An",
            "-",
            "The"
         ],
         [
            "-",
            "An",
            "A",
            "The"
         ],
         [
            "-",
            "The",
            "A",
            "An"
         ],
         [
            "-",
            "A",
            "An",
            "The"
         ],
         [
            "-",
            "The",
            "A",
            "An"
         ],
         [
            "-",
            "An",
            "The",
            "A"
         ],
         [
            "Reminded",
            "Apologized",
            "Begged",
            "Blamed"
         ],
         [
            "Blamed",
            "Reminded",
            "Begged",
            "Apologized"
         ],
         [
            "Begged",
            "Reminded",
            "Blamed",
            "Apologized"
         ],
         [
            "to have craving for",
            "Speculation",
            "Implement",
            "Pile"
         ],
         [
            "Piles",
            "Immense",
            "Implement",
            "Foster"
         ],
         [
            "Foster",
            "Immense",
            "Speculation",
            "Implement"
         ],
         [
            "Immense",
            "Implement",
            "Breakthrough",
            "Foster"
         ],
         [
            "Ultimately",
            "Breakthrough",
            "Foster",
            "Implement"
         ],
         [
            "Of/ to",
            "In/ to",
            "In / of",
            "To/ of"
         ],
         [
            "On",
            "Of",
            "In",
            "To"
         ],
         [
            "we would never have known that it comprises about 149 million kilometers.",
            "professor Rahimov’s group wouldn’t have managed to beat the world’s  foremost scientific institutes in the race to produce the blue laser.",
            "I would have bought had photographs of distant galaxies",
            "it would have been less harmful for the health ."
         ],
         [
            "Dominant",
            "Leading",
            "Primary",
            "Last"
         ],
         [
            "Shift",
            "Motion",
            "Stir",
            "Motionless"
         ],
         [
            "Follower",
            "Ruler",
            "Commander",
            "Conductor"
         ],
         [
            "Muddle",
            "Classify",
            "Arrange",
            "Order"
         ],
         [
            "Come  across",
            "Determine",
            "Miss",
            "Discover"
         ],
         [
            "Imply",
            "Comprise",
            "Contain",
            "Exclude"
         ],
         [
            "Separate",
            "Interconnect",
            "Link",
            "Join"
         ],
         [
            "Do",
            "have",
            "Did",
            "Should"
         ],
         [
            "Did",
            "have",
            "should",
            "need"
         ],
         [
            "Do",
            "Does",
            "Should",
            "Have"
         ],
         [
            "Should",
            "Do",
            "Did",
            "Have"
         ],
         [
            "has to",
            "should",
            "have",
            "ought"
         ],
         [
            "After",
            "In",
            "Before",
            "Out"
         ],
         [
            "At",
            "Of",
            "In",
            "To"
         ],
         [
            "To check people who coming in and out",
            "To give advice  to people  about the law and speak  for them in court.",
            "Protecting surroundings and environment",
            "To control of patients’ health  condition"
         ],
         [
            "Five rings  and five colors",
            "Five rings  and five continents",
            "Five colors and five stripes",
            "Five  rings and six colors"
         ],
         [
            "would  have died",
            "will  died",
            "wouldn’t have died",
            "won’t died"
         ],
         [
            "I  wouldn’t have bought  it.",
            "I wouldn’t  have buy it.",
            "I would  have  bought it.",
            "I would  had  bought it."
         ],
         [
            "His electricity would  have  been cut off.",
            "His electricity wouldn’t  have been cut off.",
            "His  electricity  will have been cut off.",
            "His electricity  won’t  have  been  cut off."
         ],
         [
            "Human  Rights",
            "Human Resource",
            "Human  Respect",
            "Human Regrets"
         ],
         [
            "Read articles",
            "Attend  to the lecture notes",
            "Read  your lecture notes",
            "Get more instructions"
         ],
         [
            "Read  articles",
            "Participate in the seminars",
            "Get more instructions",
            "Write  your lecture notes"
         ],
         [
            "I would carry out research  into many different areas of  science",
            "I would have been able to control the motion of  helicopter",
            "I would build  my own house from wood that no one have built before",
            "I would have died of  cancer and  lived."
         ],
         [
            "Somebody",
            "Something",
            "Anywhere",
            "Anything"
         ],
         [
            "Congratulate",
            "Prize",
            "Friendship",
            "Teacher"
         ],
         [
            "Amity",
            "Friendship",
            "Teacher",
            "Prize"
         ],
         [
            "didn’t see",
            "don’t saw",
            "haven’t seen",
            "Seen"
         ],
         [
            "Speaks/ lives",
            "Speak/lives",
            "Speak/live",
            "Spoke/lives"
         ],
         [
            "Can",
            "Could",
            "May",
            "can’t"
         ],
         [
            "I didn’t apply to the math contest",
            "I couldn’t apply  to the math  contest.",
            "I  applied to the math contest",
            "I can apply to the math contest."
         ],
         [
            "Stop  making an effort to achieve smth",
            "To have respect for",
            "Being outdate",
            "To make possible"
         ],
         [
            "understand",
            "To have respect for",
            "Being outdate",
            "To make possible"
         ],
         [
            "Being outdate",
            "To make possible",
            "understand",
            "To have respect for"
         ],
         [
            "Being outdate",
            "To make possible",
            "To have respect  for",
            "understand"
         ],
         [
            "Wrote",
            "Write",
            "Have written",
            "Had written"
         ],
         [
            "“OK”",
            "“Sorry”",
            "“Well done”",
            "“It was your fault”"
         ],
         [
            "Sorry",
            "We are getting married",
            "It’s not true",
            "Well done"
         ],
         [
            "Let’s have dinner",
            "Well done",
            "It’s not true",
            "Sorry"
         ],
         [
            "We are getting married",
            "It’s not true",
            "It’s brilliant idea",
            "Well done"
         ],
         [
            "It’s brilliant idea",
            "Well done",
            "Sorry",
            "It’s not true"
         ],
         [
            "It’s brilliant idea.",
            "It’s not true",
            "Let’s have dinner",
            "Sorry"
         ],
         [
            "It’s not true",
            "Sorry",
            "It’s brilliant idea.",
            "It was your fault"
         ],
         [
            "It’s brilliant idea.",
            "Sorry",
            "Let’s have dinner",
            "It was your fault"
         ],
         [
            "It’s brilliant idea.",
            "Sorry",
            "It was your fault",
            "I won’t do it"
         ],
         [
            "It’s brilliant idea.",
            "It was your fault",
            "Don’t forget",
            "I won’t do it"
         ],
         [
            "Don’t forget",
            "It was your fault",
            "Why don’t we go to the café?",
            "I won’t do it"
         ],
         [
            "Why don’t we go to the café?",
            "Don’t forget",
            "I won’t do it",
            "I’ll be polite"
         ],
         [
            "The worker begged not tell anyone.",
            "They threatened to start without him.",
            "The manager announced that the company was closing.",
            "My uncle advised me to start saving for my retirement."
         ],
         [
            "reassign",
            "compensation",
            "succeed",
            "evolve"
         ],
         [
            "evolve",
            "compensation",
            "succeed",
            "staff"
         ],
         [
            "staff",
            "compensation",
            "learn",
            "succeed"
         ],
         [
            "It is a rather significant document in the application procedure.",
            "It is a short official note to another person in the same company or organization.",
            "It is a written message that is usually put in an envelope.",
            "It is a short written document that lists your education."
         ],
         [
            "My uncle advised me to start saving for my retirement",
            "They threatened to start without him.",
            "He promised not to be late.",
            "The worker begged not tell anyone."
         ],
         [
            "The manager announced that the company was closing.",
            "My uncle advised me to start saving for my retirement.",
            "He promised not to be late.",
            "The worker begged not tell anyone."
         ],
         [
            "My uncle advised me to start saving for my retirement.",
            "The worker begged not tell anyone.",
            "The executive director blamed the manager for losing much money.",
            "The manager announced that the company was closing."
         ],
         [
            "People have not got special individual responsibilities",
            "People say that success belongs to goal-oriented",
            "The pie chart shows data breach rates in the 5 spheres",
            "The quality or state of being responsible: such as moral, legal or mental accountability"
         ],
         [
            "Management can make one`s business sphere prosperous or failing",
            "Never be responsible in all your tasks",
            "Being energetic and cheerful in all situation",
            "A duty or obligation to complete a task properly"
         ],
         [
            "Achieve",
            "Broadly",
            "Coincide",
            "Raising"
         ],
         [
            "smokes / doesn’t",
            "smokes / don’t",
            "smoke / don’t",
            "smokes / isn’t"
         ],
         [
            "Company yard, canteen, elevator service shop",
            "Health care, employees`, plant designing",
            "Gardener decorator, nurse, changeovers",
            "Company yard decorator, nurse"
         ],
         [
            "Ladder",
            "Loyalty",
            "Satisfaction",
            "Assurance"
         ],
         [
            "More understanding",
            "The most creative",
            "The most funny",
            "Satisfied"
         ],
         [
            "Opposite",
            "Kind",
            "More prettier",
            "The most kind"
         ],
         [
            "Intelligent",
            "The most handsome",
            "More attractive",
            "Misunderstanding"
         ],
         [
            "Satisfied",
            "Obligation",
            "Angry",
            "Relationship"
         ],
         [
            "Prettier/attractive/opposite",
            "Ultimate/handsome/unbelievable",
            "Competence/skills/egoistic",
            "Opposite/kindly/satisfied"
         ],
         [
            "Prettier",
            "Kind",
            "Handsome",
            "Egoistic"
         ],
         [
            "which",
            "where",
            "who",
            "when"
         ],
         [
            "where",
            "which",
            "when",
            "who"
         ],
         [
            "which",
            "when",
            "who",
            "where"
         ],
         [
            "which",
            "when",
            "who",
            "where"
         ],
         [
            "memo",
            "written communication",
            "composition",
            "essay"
         ],
         [
            "religious",
            "memo",
            "national",
            "social"
         ],
         [
            "Risk management",
            "Advertising",
            "Service management",
            "Human resources management"
         ],
         [
            "Provide great service",
            "Service",
            "Stay focused",
            "Analyze your competition"
         ],
         [
            "Management",
            "Competition",
            "Stay focused",
            "Advertising"
         ],
         [
            "which",
            "what",
            "whose",
            "who"
         ],
         [
            "what",
            "which",
            "who",
            "when"
         ],
         [
            "whose",
            "which",
            "who",
            "what"
         ],
         [
            "whom",
            "whose",
            "when",
            "which"
         ],
         [
            "Advantage",
            "Benefit",
            "Act of assistance",
            "Godsend"
         ],
         [
            "Administration",
            "Protection",
            "Guardianship",
            "Safekeeping"
         ],
         [
            "Disagreement",
            "Quarrel",
            "Contest",
            "Dispute"
         ],
         [
            "Merchant",
            "Customer",
            "Broker",
            "Vendor"
         ],
         [
            "Where",
            "Whom",
            "Who",
            "What"
         ],
         [
            "Where",
            "What",
            "Whom",
            "Who"
         ],
         [
            "Whose",
            "Who",
            "Whom",
            "What"
         ],
         [
            "Whose",
            "What",
            "Which",
            "Whom"
         ],
         [
            "Whose",
            "What",
            "Which",
            "Where"
         ],
         [
            "That",
            "Who",
            "Which",
            "What"
         ],
         [
            "Whose",
            "Where",
            "Which",
            "What"
         ],
         [
            "Whose",
            "That",
            "What",
            "Whom"
         ],
         [
            "Where",
            "What",
            "Who",
            "That"
         ],
         [
            "an audition",
            "an addiction",
            "an addition",
            "an attention"
         ],
         [
            "looking down on",
            "looking out",
            "looking back on",
            "looking in"
         ],
         [
            "to watch",
            "to imitate",
            "to respect",
            "to consider"
         ],
         [
            "looking in",
            "looking back",
            "looking forward to",
            "looking on"
         ],
         [
            "without/through/onto",
            "with/in/to",
            "off/in/to",
            "without/through/to"
         ],
         [
            "to/on",
            "up/about",
            "with/into",
            "with/about"
         ],
         [
            "definitely",
            "doubtfully",
            "Questionably",
            "Directly"
         ],
         [
            "Analyze",
            "Generalize",
            "find or encounter by chance",
            "Search"
         ],
         [
            "patting your friend on his shoulder",
            "posting comments on your friends’ photos",
            "sharing video on your timeline",
            "posting emoji"
         ],
         [
            "Urgent",
            "Existing",
            "Necessary",
            "Unimportant"
         ],
         [
            "afterward",
            "at the present time",
            "During",
            "Before"
         ],
         [
            "received",
            "Suggested",
            "offered",
            "Presented"
         ],
         [
            "the set rules for a proper behavior",
            "a way of doing something",
            "the drive that makes you carry out tasks",
            "a serious attitude towards one’s duty"
         ],
         [
            "create or devise methodically",
            "decrease to a minimum amount",
            "improve to perfection",
            "Strengthen"
         ],
         [
            "looked to",
            "looked out",
            "looked back",
            "looked through"
         ],
         [
            "at the time",
            "before",
            "during",
            "After"
         ],
         [
            "I am writing to request…",
            "Yours faithfully",
            "Dear Sir or Madam",
            "Dear Mr./Mrs./Ms."
         ],
         [
            "Stabilize",
            "get better",
            "Help",
            "worsen"
         ],
         [
            "Simply",
            "correctly",
            "Directly",
            "Indirectly"
         ],
         [
            "with confidence",
            "Primarily",
            "Secretly",
            "openly"
         ],
         [
            "intellectual property",
            "intellectual propriety",
            "intelligent property",
            "intellectual ability"
         ],
         [
            "standing",
            "having stand",
            "stand",
            "is stood"
         ],
         [
            "Emotion",
            "Success",
            "Studies",
            "Goal"
         ],
         [
            "wastefully",
            "rational",
            "rationally",
            "Wasteful"
         ],
         [
            "Changeable",
            "comparable",
            "different",
            "well suited"
         ],
         [
            "a strong desire to know or learn something",
            "an enthusiasm",
            "a motivation",
            "Indifference"
         ],
         [
            "Respect",
            "conflict",
            "Affairs",
            "friendship"
         ],
         [
            "understanding",
            "Indifference",
            "hesitation",
            "confidence"
         ],
         [
            "Spread rumors online",
            "Respect other people’s time.",
            "Adhere to the same standards online that you follow in real life.",
            "Respect the privacy of people."
         ],
         [
            "prevent from",
            "copy from",
            "deal with",
            "provide with"
         ],
         [
            "to find out something suitable by analyzing deeply",
            "to come to one conclusion",
            "become the owner of something",
            "to understand"
         ],
         [
            "Unclear",
            "Plain",
            "Evident",
            "Precise"
         ],
         [
            "fulfilling",
            "carrying on",
            "Commencing",
            "failing"
         ],
         [
            "Stating a goal is not so easy as achieving it.",
            "One cannot achieve the goal without stating it.",
            "It is more difficult to achieve the goal than stating it",
            "Achieving a goal is just as easy as stating it."
         ],
         [
            "to spread information without an owner’s permission",
            "breaking the code of somebody’s computer and crushing it",
            "selling information for the purpose of making money",
            "investigate or look around secretly in an attempt to find out something, especially information about someone's private affairs"
         ],
         [
            "Deleting your friends’ file is not legal",
            "Exchanging files with friends is illegal.",
            "File exchange with friends is legal.",
            "Deleting your friends’ file is legal"
         ],
         [
            "unimportant",
            "Intense",
            "immediate",
            "important"
         ],
         [
            "going",
            "Staying",
            "running",
            "looking"
         ],
         [
            "Status",
            "Competition",
            "Demand",
            "popularity"
         ],
         [
            "Words",
            "Assignments",
            "Questions",
            "Tests"
         ],
         [
            "Enjoying",
            "Energetic",
            "Faithful",
            "Embarrassed"
         ],
         [
            "Enrich",
            "Enquire",
            "Enroll",
            "Finish"
         ],
         [
            "Chose",
            "Bring",
            "Write",
            "Take"
         ],
         [
            "Studied",
            "Finished",
            "Studies",
            "finishing"
         ],
         [
            "improve",
            "being improved",
            "has been improving",
            "improving"
         ],
         [
            "solving",
            "deduction",
            "demonstration",
            "information"
         ],
         [
            "motivative",
            "motivated",
            "challengeable",
            "fascinating"
         ],
         [
            "change",
            "read",
            "learn",
            "stop"
         ],
         [
            "Impudence",
            "Experiences",
            "Instructions",
            "Features"
         ],
         [
            "accelerate",
            "suffer",
            "reduce",
            "expand"
         ],
         [
            "compensation",
            "complexion",
            "comparison",
            "comprehension"
         ],
         [
            "assurance",
            "trust",
            "doubt",
            "faith"
         ],
         [
            "able",
            "expert",
            "inexperienced",
            "proficient"
         ],
         [
            "imagine",
            "create",
            "searched",
            "look at"
         ],
         [
            "become",
            "make",
            "do",
            "finish"
         ],
         [
            "pressures",
            "things",
            "skills",
            "ideas"
         ],
         [
            "revise",
            "write",
            "learn",
            "read"
         ],
         [
            "farther",
            "latest",
            "worse",
            "further"
         ],
         [
            "come",
            "decided",
            "have decided",
            "will decide"
         ],
         [
            "motivation is useless thing",
            "motivation is a loss of confidence or enthusiasm",
            "motivation is an encouragement or a feeling of stimulation which pushes people to have better results in life.",
            "motivation is a great job"
         ],
         [
            "incentive, fear, achievement ,growth, power, social",
            "understanding, innovating, achievement, creation",
            "success, persistent",
            "approach, refer"
         ],
         [
            "the process of controlling or limiting something that is not wanted",
            "the activity or condition of competing",
            "the ability to do something in a satisfactory way",
            "the circumstances affecting the way in which people live or work"
         ],
         [
            "in touch",
            "the theory component",
            "by reputation",
            "one’s ability"
         ],
         [
            "by reputation",
            "in touch",
            "people’s contact information",
            "touch"
         ],
         [
            "to get",
            "in touch",
            "to submit",
            "one’s ability"
         ],
         [
            "exhaustion",
            "satisfaction",
            "starvation",
            "celebration"
         ],
         [
            "Motivation",
            "Analysis",
            "Ability",
            "Affection"
         ],
         [
            "to hurt someone",
            "to use something for advantage",
            "to control or limit",
            "to eat or drink especially a lot of something"
         ],
         [
            "flowing",
            "evaporating",
            "warming",
            "cooling"
         ],
         [
            "convince",
            "increase",
            "dissuade",
            "stop"
         ],
         [
            "fact",
            "actuality",
            "fantasy",
            "reality"
         ],
         [
            "contamination",
            "confirmation",
            "acceleration",
            "deceleration"
         ],
         [
            "partially",
            "considerably",
            "badly",
            "reasonably"
         ],
         [
            "being careful",
            "had been careful",
            "to become careful",
            "to be careful"
         ],
         [
            "concluding",
            "adding more points",
            "listing points",
            "giving examples"
         ],
         [
            "giving examples",
            "adding more points",
            "introducing opposing viewpoints",
            "listing points"
         ],
         [
            "medical problems",
            "political problems",
            "social problems",
            "ecological problems"
         ],
         [
            "Rationale",
            "Inequality",
            "Influence",
            "Help or support"
         ],
         [
            "chooses",
            "goes",
            "points",
            "holds"
         ],
         [
            "An influence",
            "An opinion which someone offers you",
            "A rationale",
            "A help or support"
         ],
         [
            "return to a normal state of health, mind, or strength",
            "depend on with full trust or confidence",
            "examine or assess",
            "keep or accumulate"
         ],
         [
            "Influence",
            "The feeling of being certain that something exists or is true",
            "Help or support",
            "An opinion which someone offers you"
         ],
         [
            "help or support",
            "a feeling of uncertainty or lack of conviction",
            "money which is owed to someone else",
            "influence"
         ],
         [
            "help or support",
            "the feeling of being certain that something exists or is true",
            "influence",
            "money which is owed to someone else"
         ],
         [
            "clever",
            "nervous",
            "energetic",
            "hard-working"
         ],
         [
            "hold",
            "pass",
            "give",
            "borrow"
         ],
         [
            "caught /robbed",
            "were catching/ was robbing",
            "was catching/ was robbing",
            "caught/ was robbing"
         ],
         [
            "make plan for the future",
            "enlarge",
            "be in the height",
            "observe"
         ],
         [
            "observe",
            "make plan for the future",
            "playing football",
            "enlarge"
         ],
         [
            "naturally",
            "rapid",
            "hardly",
            "fast"
         ],
         [
            "become",
            "was become",
            "have became",
            "is becoming"
         ],
         [
            "undoubted",
            "undoubtedly",
            "doubtful",
            "hardy"
         ],
         [
            "progress",
            "condition",
            "famous",
            "improve"
         ],
         [
            "to be a member of",
            "to deal with",
            "to achieve",
            "to take part in"
         ],
         [
            "reluctance",
            "diligence",
            "reason",
            "success"
         ],
         [
            "to make better",
            "to achieve",
            "to get dark",
            "to do worse"
         ],
         [
            "to do better",
            "to notice",
            "to decide",
            "to expect"
         ],
         [
            "to fail",
            "to start",
            "to expect",
            "to decide"
         ],
         [
            "will spent",
            "is spent",
            "are spending",
            "are spent"
         ],
         [
            "education",
            "opinion",
            "significance",
            "purpose"
         ],
         [
            "was increasing",
            "has increased",
            "is increased",
            "had increased"
         ],
         [
            "lies",
            "laid",
            "was laid",
            "will be lying"
         ],
         [
            "will/ have finished",
            "had /finished",
            "would/ have finished",
            "have /finished"
         ],
         [
            "ultimate",
            "doubtingly",
            "stunning",
            "undoubtedly"
         ],
         [
            "to remember",
            "to contribute",
            "to regard as belonging",
            "to give a detailed account of"
         ],
         [
            "begged",
            "apologized",
            "reminded",
            "promised"
         ],
         [
            "begged",
            "apologized",
            "promised",
            "advised"
         ],
         [
            "warned",
            "begged",
            "advised",
            "believed"
         ],
         [
            "announced",
            "believed",
            "advised",
            "promised"
         ],
         [
            "promised",
            "apologized",
            "advised",
            "blamed"
         ],
         [
            "you would continue learning",
            "I’ll turn it down",
            "you will  achieve your goal",
            "if you are professional in your field"
         ],
         [
            "I’ll turn it down",
            "if they offer me the job",
            "you will manage to succeed  in your career path",
            "you would be aware of news and exchange ideas"
         ],
         [
            "an instance of something happening; an event or occurrence",
            "a consequence",
            "a mystery",
            "a cause, explanation, or justification for an action or event"
         ],
         [
            "a union",
            "a cause, explanation, or justification for an action or event",
            "an amount of money given as salary",
            "a result of some action"
         ],
         [
            "the state or fact of something being likely; probability",
            "a thorough examination",
            "an unpleasant situation",
            "an event that is the cause of a particular action, process, or situation"
         ],
         [
            "Broaden/work",
            "prior/job",
            "Progress/practical",
            "Approach/social"
         ],
         [
            "to find out something suitable by analyzing deeply",
            "a future purpose a person has set",
            "to understand",
            "vivid, exact clear"
         ],
         [
            "to  become the owner of something",
            "a way of dealing with situation or a tactics",
            "a future purpose a person has set",
            "to find out something suitable by analyzing deeply"
         ],
         [
            "a future purpose a person has set",
            "vivid,exact,clear",
            "get organized",
            "to  become the owner of something"
         ],
         [
            "stay focused",
            "to become the owner of something",
            "to find out something suitable by analyzing deeply",
            "to understand"
         ],
         [
            "to find out something suitable by analyzing deeply",
            "exact,clear, vivid",
            "work your own",
            "the type of job doing which is fulfilled in a group,together"
         ],
         [
            "to find out something suitable by analyzing deeply",
            "coming to one conclusion,mind togetherby discussing or debating in a group; pondering altogether",
            "the type of job doing which is fulfilled in a group",
            "to acquire"
         ],
         [
            "Head, run, lead",
            "Progress, develop, achieve, evolve",
            "Recognize, survey, digest",
            "Study, scan, inspect"
         ],
         [
            "vivid, clear ,exact",
            "Technique",
            "to repair",
            "an instrument  a special technique which helps us to do some work ;job"
         ],
         [
            "to harm",
            "to damage",
            "to assist",
            "to injury"
         ],
         [
            "Closer",
            "Organizing",
            "Goals",
            "Prior"
         ],
         [
            "prior/ job",
            "strategies/goals",
            "closer/outlook",
            "aims/research"
         ],
         [
            "To investigate",
            "To inform",
            "To read",
            "To teach"
         ],
         [
            "Head",
            "Reward",
            "Direction",
            "Fire"
         ],
         [
            "Closer",
            "Approach",
            "Progress",
            "Prior"
         ],
         [
            "Approach",
            "Organizing",
            "Goals",
            "Closer"
         ],
         [
            "Slight",
            "Progress",
            "Important",
            "Worthless"
         ],
         [
            "to discover",
            "to achieve",
            "to inspect",
            "to respect"
         ],
         [
            "Goals",
            "Organizing",
            "Closer",
            "Approach"
         ],
         [
            "Dare",
            "Can",
            "May",
            "Should"
         ],
         [
            "May",
            "Must",
            "Could",
            "Need"
         ],
         [
            "Must",
            "Dare",
            "May",
            "Should"
         ],
         [
            "He persuaded him to don’t",
            "He refused to admit that the argument was true.",
            "He congratulated me on passing the exam.",
            "They announced that they were getting married."
         ],
         [
            "Dare",
            "Can",
            "May",
            "must have"
         ],
         [
            "joint plan/mutual",
            "observe/examine closely.",
            "achievment research/act",
            "be in the height/peak"
         ],
         [
            "make a plan for the future",
            "enlarge",
            "achievment research",
            "planing with somebody together"
         ],
         [
            "observe/examine closely",
            "achievement research",
            "to learn the whole life",
            "join plan"
         ],
         [
            "planning with somebody together",
            "provide",
            "to learn the whole life",
            "enlarge"
         ],
         [
            "observe",
            "life long learning",
            "enlarge",
            "teach less experienced people about their job or a particular subject."
         ],
         [
            "broaden",
            "gaining",
            "practical",
            "social"
         ],
         [
            "schemes",
            "social",
            "partnering",
            "practial"
         ],
         [
            "social",
            "gaining",
            "partnering",
            "broaden"
         ],
         [
            "schemes.",
            "gaining",
            "truitful",
            "visitations"
         ],
         [
            "Learn",
            "Read",
            "Write",
            "Revise"
         ],
         [
            "an attention",
            "an addiction",
            "an addition",
            "an audition"
         ],
         [
            "looking out",
            "looking in",
            "looking back on",
            "looking down on"
         ],
         [
            "to consider",
            "to watch",
            "to respect",
            "to intimidate"
         ],
         [
            "directly",
            "definitely",
            "questionably",
            "doubtfully"
         ],
         [
            "analyze",
            "search",
            "generalize",
            "find or encounter by chance"
         ],
         [
            "interested",
            "free to do something",
            "busy or occupied",
            "disinterested"
         ],
         [
            "emotion",
            "goal",
            "success",
            "studies"
         ],
         [
            "wasteful",
            "rationally",
            "wastefully",
            "rational"
         ],
         [
            "confidence",
            "understanding",
            "hesitation",
            "indifference"
         ],
         [
            "Spread rumors online",
            "Respect other people’s time.",
            "Respect the privacy of people.",
            "Adhere to the same standards online that you follow in real life."
         ],
         [
            "copy from",
            "prevent from",
            "deal with",
            "provide with"
         ],
         [
            "to become the owner of something",
            "to find out something suitable by analyzing deeply",
            "to come to one conclusion",
            "to understand"
         ],
         [
            "precise",
            "unclear",
            "plain",
            "evident"
         ],
         [
            "commencing",
            "carrying on",
            "failing",
            "fulfilling"
         ],
         [
            "Stating a goal is not so easy as achieving it.",
            "One cannot achieve the goal without stating it.",
            "Achieving a goal is just as easy as stating it.",
            "It is more difficult to achieve the goal than stating it"
         ],
         [
            "immediate",
            "intense",
            "important",
            "unimportant"
         ],
         [
            "going",
            "running",
            "looking",
            "staying"
         ],
         [
            "demand",
            "popularity",
            "competition",
            "status"
         ],
         [
            "unpracticed",
            "proficiency",
            "inexperienced",
            "profitable"
         ],
         [
            "many",
            "simple",
            "extraordinary",
            "extremely"
         ],
         [
            "energetic",
            "enjoying",
            "faithful",
            "embarrassed"
         ],
         [
            "enrich",
            "enquire",
            "finish",
            "enroll"
         ],
         [
            "get",
            "bring",
            "take",
            "behold"
         ],
         [
            "easy",
            "enormous",
            "easiest",
            "much"
         ],
         [
            "theory",
            "shelf",
            "practice",
            "table"
         ],
         [
            "take",
            "encourage",
            "not to encourage",
            "ignore"
         ],
         [
            "good",
            "bad",
            "advantage",
            "disadvantage"
         ],
         [
            "giving",
            "meeting",
            "searching",
            "misunderstanding"
         ],
         [
            "bring",
            "take",
            "write",
            "chose"
         ],
         [
            "has been improving",
            "improving",
            "improve",
            "being improved"
         ],
         [
            "solving",
            "demonstration",
            "information",
            "deduction"
         ],
         [
            "before",
            "after",
            "slowly",
            "soon"
         ],
         [
            "noisy",
            "crowded",
            "quiet",
            "overcrowded"
         ],
         [
            "can",
            "need",
            "have to",
            "must not"
         ],
         [
            "challengeable",
            "motivated",
            "fascinating",
            "motivative"
         ],
         [
            "ought to/must",
            "have to/may",
            "can/ must",
            "can/can"
         ],
         [
            "unless",
            "for",
            "lest",
            "if"
         ],
         [
            "suggest",
            "sell",
            "solve",
            "change"
         ],
         [
            "accelerate",
            "expand",
            "reduce",
            "suffer"
         ],
         [
            "has to",
            "having to",
            "can",
            "need"
         ],
         [
            "complexion",
            "compensation",
            "comprehension",
            "comparison"
         ],
         [
            "doubt",
            "trust",
            "faith",
            "assurance"
         ],
         [
            "inexperienced",
            "expert",
            "proficient",
            "able"
         ],
         [
            "searched",
            "look at",
            "imagine",
            "create"
         ],
         [
            "need",
            "needn`t",
            "has to",
            "can"
         ],
         [
            "become",
            "finish",
            "make",
            "do"
         ],
         [
            "skills",
            "ideas",
            "things",
            "pressures"
         ],
         [
            "write",
            "learn",
            "revise",
            "read"
         ],
         [
            "speaking / lives",
            "has  spoken / is living",
            "speak  /live",
            "speaks   /lives"
         ],
         [
            "were  coming /was playing",
            "came /were playing",
            "was  coming  /were playing;",
            "come /played;"
         ],
         [
            "dissuade",
            "convince",
            "stop",
            "increase"
         ],
         [
            "cooling",
            "warming",
            "evaporating",
            "flowing"
         ],
         [
            "goes",
            "holds",
            "points",
            "chooses"
         ],
         [
            "An opinion which someone offers you",
            "An influence",
            "A help or support",
            "A rationale"
         ],
         [
            "keep or accumulate",
            "examine or assess",
            "depend on with full trust or confidence",
            "return to a normal state of health, mind, or strength"
         ],
         [
            "The wind blows the ticket into the air",
            "The ticket wind into the air the blows",
            "The air blows into the wind the ticket",
            "The air wind the blow into the ticket."
         ],
         [
            "An opinion which someone offers you",
            "Help or support",
            "Influence",
            "The feeling of being certain that something exists or is true"
         ],
         [
            "learning",
            "to learn",
            "having learnt",
            "learn"
         ],
         [
            "were catching/ was robbing",
            "was catching/ was robbing",
            "caught /robbed",
            "caught/ was robbing"
         ],
         [
            "be in the height",
            "observe",
            "make plan for the future",
            "enlarge"
         ],
         [
            "observe",
            "make plan for the future",
            "playing football",
            "enlarge"
         ],
         [
            "to regard (something) as likely to happen",
            "to cry out suddenly, especially in surprise",
            "to cause to straighten out or to stretch out",
            "to have objective reality or being"
         ],
         [
            "a set of circumstances that makes it possible to do something",
            "the group of people who work for a particular organization or business",
            "something that you are trying to do or achieve",
            "an amount of time or a situation in which something can be done"
         ],
         [
            "a group of people who work for a particular organization or business",
            "something that you are trying to do or achieve",
            "a plane figure with three straight sides and three angles",
            "an amount of time or a situation in which something can be done"
         ],
         [
            "to use something for advantage;",
            "to change something, usually slightly, or to cause characteristics of something to change;",
            "a condition of extremely being tired;",
            "a small grey-brown bird which is especially common in towns;"
         ],
         [
            "rationally",
            "clearly shown",
            "help or  support",
            "unequal"
         ],
         [
            "rapid",
            "naturally",
            "fast",
            "hardly"
         ],
         [
            "was become",
            "is becoming",
            "have became",
            "become"
         ],
         [
            "doubtful",
            "undoubtedly",
            "undoubted",
            "hardy"
         ],
         [
            "are spent",
            "is spent",
            "are spending",
            "will spent"
         ],
         [
            "condition",
            "improve",
            "famous",
            "progress"
         ],
         [
            "look ahead",
            "look out",
            "look back",
            "look for"
         ],
         [
            "to understand",
            "to create something",
            "to become the owner of something",
            "to establish or indicate who or what (someone or something) is"
         ],
         [
            "a restarting process",
            "a regime of sleep in computer",
            "an update of the software",
            "an error in a computer program or system"
         ],
         [
            "to achieve",
            "to deal with",
            "to be a member of",
            "to take part in"
         ],
         [
            "success",
            "diligence",
            "reason",
            "reluctance"
         ],
         [
            "a conclusion",
            "an influence",
            "an opinion which someone offers you",
            "a help  or support"
         ],
         [
            "searching information in the internet",
            "using Microsoft programs",
            "to be often unkind to someone or hurt other people",
            "transfer fines"
         ],
         [
            "scientific",
            "obsolete",
            "modern",
            "old"
         ],
         [
            "am going",
            "went",
            "is going",
            "will be go"
         ],
         [
            "will/ have finished",
            "have /finished",
            "had /finished",
            "would/ have finished"
         ]
      ],
      "correctAnswers": [
         1,
         3,
         3,
         1,
         2,
         2,
         3,
         4,
         1,
         3,
         4,
         1,
         2,
         1,
         2,
         1,
         3,
         4,
         4,
         2,
         2,
         3,
         1,
         4,
         1,
         1,
         3,
         4,
         4,
         2,
         3,
         1,
         1,
         2,
         4,
         1,
         2,
         2,
         2,
         3,
         3,
         2,
         4,
         4,
         2,
         3,
         4,
         4,
         3,
         3,
         4,
         4,
         3,
         3,
         2,
         4,
         1,
         3,
         2,
         3,
         1,
         4,
         3,
         4,
         4,
         4,
         1,
         1,
         3,
         4,
         1,
         4,
         3,
         3,
         1,
         2,
         2,
         4,
         4,
         1,
         3,
         1,
         2,
         2,
         3,
         1,
         3,
         4,
         2,
         3,
         3,
         1,
         4,
         1,
         4,
         1,
         4,
         1,
         3,
         1,
         1,
         2,
         1,
         4,
         1,
         4,
         3,
         4,
         3,
         3,
         4,
         1,
         2,
         4,
         3,
         1,
         1,
         1,
         3,
         4,
         4,
         1,
         1,
         1,
         2,
         4,
         2,
         1,
         3,
         1,
         4,
         1,
         4,
         4,
         2,
         2,
         2,
         2,
         2,
         3,
         4,
         2,
         1,
         1,
         3,
         1,
         3,
         2,
         3,
         3,
         1,
         3,
         3,
         2,
         3,
         2,
         4,
         2,
         3,
         3,
         3,
         4,
         4,
         1,
         3,
         1,
         4,
         1,
         4,
         2,
         1,
         4,
         2,
         2,
         4,
         2,
         3,
         1,
         1,
         4,
         3,
         4,
         1,
         2,
         3,
         1,
         3,
         1,
         1,
         4,
         3,
         4,
         2,
         1,
         3,
         2,
         2,
         4,
         3,
         4,
         1,
         1,
         4,
         2,
         4,
         2,
         4,
         4,
         3,
         3,
         2,
         1,
         4,
         1,
         2,
         2,
         3,
         1,
         3,
         1,
         3,
         4,
         3,
         1,
         4,
         4,
         1,
         3,
         1,
         2,
         4,
         4,
         3,
         4,
         4,
         4,
         2,
         1,
         2,
         3,
         3,
         4,
         4,
         4,
         2,
         2,
         1,
         4,
         2,
         1,
         1,
         4,
         1,
         3,
         1,
         3,
         2,
         2,
         4,
         1,
         4,
         1,
         3,
         2,
         1,
         1,
         4,
         2,
         3,
         1,
         2,
         1,
         1,
         1,
         1,
         1,
         4,
         4,
         2,
         1,
         4,
         3,
         4,
         2,
         1,
         3,
         1,
         2,
         3,
         1,
         4,
         4,
         2,
         2,
         4,
         2,
         4,
         1,
         1,
         1,
         4,
         1,
         1,
         1,
         2,
         4,
         2,
         3,
         3,
         2,
         4,
         2,
         2,
         2,
         3,
         1,
         3,
         2,
         2,
         3,
         4,
         4,
         2,
         3,
         2,
         4,
         4,
         4,
         4,
         2,
         3,
         2,
         3,
         2,
         2,
         3,
         3,
         4,
         3,
         1,
         2,
         2,
         4,
         3,
         2,
         3,
         3,
         1,
         1,
         4,
         4,
         1,
         2,
         3,
         1,
         2,
         2,
         1,
         2,
         1,
         4,
         1,
         4,
         2,
         4,
         4,
         2,
         3,
         1,
         2,
         2,
         3,
         2,
         2,
         2,
         3,
         4,
         4,
         4,
         4,
         3,
         1,
         3,
         1,
         3,
         1,
         1
      ]
   },
}