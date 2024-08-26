#!/usr/bin/env node

// console.log(`
//     ╔═══════════════════════════════╗
//     ║   KamiLimu Month 4 Learnings  ║
//     ╚═══════════════════════════════╝
    
//     Big Picture :
//                 Being at KamiLimu -     I have learnt the emphasy in continuous learning, innovation, teamwork, and personal development.
//                                         I have learnt good problem ideation skills.
//                 Across the Sessions -   I have learnt the integration of technical skills with soft skills to excel in innovation and leadership.
    
//     SESSIONS :
//                 Introduction to ICT mentors and ICT track
//                 How are you session 2
//                 Introduction to Problem Ideation
//                 Public Speaking 3 & 4
//                 Scholarship writing 3
//                 Innovation in Practise
//                 ICT Track-based Skills Training 1
//                 Problem Solving using Data Structures 2
//     MAP LESSONS :
//                 Introduction to ICT mentors and ICT track - Professional Development
//                 How are you session 2 - Personal Development
//                 Introduction to Problem Ideation - Innovation
//                 Public Speaking 3 & 4 - Personal Development
//                 Scholarship writing 3 - Scholarship
//                 Innovation in Practise - Innovation
//                 ICT Track-based Skills Training 1 - ICT
//                 Problem Solving using Data Structures 2 - ICT

//     KEY TAKEAWAYS :
//                 Introduction to Problem Ideation - I leanrt the power of brainstorming on your problem before coming up with the problem statement
//                                                    One needs to identify of a problem and think of a solution later

//                 Public Speaking 3 & 4 - Enhancing Speech with Rhetorical Devices and Visual Aids
//                                         The Power of Nonverbal Communication

//                 Scholarship writing 3 - Importance of Holistic Development
//                                         Tailored Applications and Storytelling:


//                 Innovation in Practise - Iterative Process of Innovation
//                                          Learning from Mistakes and Feedback

//                 ICT Track-based Skills Training 1 - Practical Application of Technical Skills
//                                                     Collaboration and Teamwork:


//                 Problem Solving using Data Structures 2 - Choosing the Right Data Structure
//                                                           Applying Concepts to Real-World Scenarios:


//     I will apply what I learned in uni to come up with a good problem and a salable solution

//     I will apply what I learned in Interview Preparation: Behavioral & Technical Interviews: Use the interview best practices, including understanding job descriptions
    
//     `);



// function simulateInstallation(task, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Installing ${task}...`);
//             resolve();
//         }, delay);
//     });
// }

// async function installKamiLimu() {
//     console.log("Starting KamiLimu Month 4 Learnings Installation...");

//     await simulateInstallation('Big Picture', 2000); // 2 seconds delay
//     await simulateInstallation('Sessions', 2000); // 2 seconds delay
//     await simulateInstallation('MAP Lessons', 2000); // 2 seconds delay
//     await simulateInstallation('Key Takeaways', 2000); // 2 seconds delay

//     console.log("\n╔═══════════════════════════════╗");
//     console.log("║   KamiLimu Month 4 Learnings  ║");
//     console.log("╚═══════════════════════════════╝\n");
    
//     console.log(`
//     Big Picture :
//                 Being at KamiLimu -     I have learnt the emphasy in continuous learning, innovation, teamwork, and personal development.
//                                         I have learnt good problem ideation skills.
//                 Across the Sessions -   I have learnt the integration of technical skills with soft skills to excel in innovation and leadership.
    
//     SESSIONS :
//                 Introduction to ICT mentors and ICT track
//                 How are you session 2
//                 Introduction to Problem Ideation
//                 Public Speaking 3 & 4
//                 Scholarship writing 3
//                 Innovation in Practise
//                 ICT Track-based Skills Training 1
//                 Problem Solving using Data Structures 2
//     MAP LESSONS :
//                 Introduction to ICT mentors and ICT track - Professional Development
//                 How are you session 2 - Personal Development
//                 Introduction to Problem Ideation - Innovation
//                 Public Speaking 3 & 4 - Personal Development
//                 Scholarship writing 3 - Scholarship
//                 Innovation in Practise - Innovation
//                 ICT Track-based Skills Training 1 - ICT
//                 Problem Solving using Data Structures 2 - ICT

//     KEY TAKEAWAYS :
//                 Introduction to Problem Ideation - I leanrt the power of brainstorming on your problem before coming up with the problem statement
//                                                    One needs to identify of a problem and think of a solution later

//                 Public Speaking 3 & 4 - Enhancing Speech with Rhetorical Devices and Visual Aids
//                                         The Power of Nonverbal Communication

//                 Scholarship writing 3 - Importance of Holistic Development
//                                         Tailored Applications and Storytelling:


//                 Innovation in Practise - Iterative Process of Innovation
//                                          Learning from Mistakes and Feedback

//                 ICT Track-based Skills Training 1 - Practical Application of Technical Skills
//                                                     Collaboration and Teamwork:


//                 Problem Solving using Data Structures 2 - Choosing the Right Data Structure
//                                                           Applying Concepts to Real-World Scenarios:


//     I will apply what I learned in uni to come up with a good problem and a salable solution

//     I will apply what I learned in Interview Preparation: Behavioral & Technical Interviews: Use the interview best practices, including understanding job descriptions
//     `);
//     console.log("\nInstallation Complete!\n");
// }

// installKamiLimu();



function simulateInstallation(task, details, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Installing ${task}...`);
            setTimeout(() => {
                console.log(details);
                resolve();
            }, 1000); // Add a slight delay before showing details
        }, delay);
    });
}

async function installKamiLimu() {
    console.log("Starting KamiLimu Month 4 Learnings Installation...\n");

    console.log(`
            ╔═══════════════════════════════╗
            ║   KamiLimu Month 4 Learnings  ║
            ╚═══════════════════════════════╝
            `);
    await simulateInstallation(
        'MAP LESSONS',
        `
        Introduction to ICT mentors and ICT track - Professional Development
        How are you session 2 - Personal Development
        Introduction to Problem Ideation - Innovation
        Public Speaking 3 & 4 - Personal Development
        Scholarship writing 3 - Scholarship
        Innovation in Practise - Innovation
        ICT Track-based Skills Training 1 - ICT
        Problem Solving using Data Structures 2 - ICT
        `,
        
        5000
    );

    await simulateInstallation(
        'SESSIONS',
        `
        Introduction to ICT mentors and ICT track
        How are you session 2
        Introduction to Problem Ideation
        Public Speaking 3 & 4
        Scholarship writing 3
        Innovation in Practise
        ICT Track-based Skills Training 1
        Problem Solving using Data Structures 2
        `,
        2000
    );

    await simulateInstallation(
        'KEY TAKEAWAYS',
        `
        Introduction to Problem Ideation - I learnt the power of brainstorming on your problem before coming up with the problem statement. One needs to identify a problem and think of a solution later.
        
        Public Speaking 3 & 4 - Enhancing Speech with Rhetorical Devices and Visual Aids, and the Power of Nonverbal Communication.
        
        Scholarship writing 3 - Importance of Holistic Development and Tailored Applications and Storytelling.
        
        Innovation in Practise - Iterative Process of Innovation and Learning from Mistakes and Feedback.
        
        ICT Track-based Skills Training 1 - Practical Application of Technical Skills and Collaboration and Teamwork.
        
        Problem Solving using Data Structures 2 - Choosing the Right Data Structure and Applying Concepts to Real-World Scenarios.
        `,
        2000
    );

    await simulateInstallation(
        'Application in University Studies and Career Preparation',
        `
        In University :

        I'll leverage problem ideation techniques to develop innovative solutions by empathizing with problems, clearly defining them, and brainstorming creative ideas before prototyping.

        In Career Preparation : 

        I will actively apply the interview best practices I've learned, focusing on both behavioral and technical aspects.
        `,
        2000
    );

    console.log("Installation Complete!\n");
}

installKamiLimu();