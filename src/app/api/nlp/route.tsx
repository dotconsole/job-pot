import * as natural from "natural";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  let data = await req.json();

//   // let regex = /SUMMARY|WORK EXPERIENCE|SIDE PROJECTS|PUBLICATIONS|EDUCATION AND CERTIFICATES|TECHNICAL SKILLS|LANGUAGES/g;
//   let regex = ['SUMMARY','WORK EXPERIENCE','SIDE PROJECTS','PUBLICATIONS','EDUCATION AND CERTIFICATES','TECHNICAL SKILLS','LANGUAGES'];
//   // console.log(resumeText.split(regex), resumeText.split(regex).length)
//   let secs = []
//   let s = ""



// // Create a tokenizer
// const tokenizer = new natural.SentenceTokenizer();

// // Example text to tokenize

// // Tokenize the input text
// const tokens = tokenizer.tokenize(resumeText);


// // console.log(tokens)
// // Split the tokens into sections
// const sections: string[][] = [];
// let section: string[] = [];
// // console.log({ tokens })
// if(tokens) {
//   for (const token of tokens) {
//     // If the token is a newline character, start a new section
//     if (token === '\n') {
//       sections.push(section);
//       section = [];
//     } else {
//       // Otherwise, add the token to the current section
//       section.push(token);
//     }
//   }
// }
// // console.log({sections})

// // Create a classifier instance
// const classifier = new natural.BayesClassifier();

// // Train the classifier with some sample data
// classifier.addDocument('name', 'name');
// classifier.addDocument('email', 'email');
// classifier.addDocument('phone', 'phone');
// classifier.addDocument('address', 'address');
// classifier.addDocument('summary', 'summary');
// classifier.addDocument('objective', 'objective');
// classifier.addDocument('education', 'education');
// classifier.addDocument('experience', 'experience');
// classifier.addDocument('skills', 'skills');
// classifier.addDocument('languages', 'languages');
// classifier.addDocument('interests', 'interests');
// classifier.addDocument('references', 'references');
// classifier.train();

// // Parse each section and extract the relevant information
// const resumeJSON: any = {};

// // console.log({ sections })

// for (const section of sections) {
//   // Join the tokens in the section into a string
//   const sectionText = section.join(' ');

//   // Classify the section based on its text
//   const sectionLabel = classifier.classify(sectionText);

//   // Extract the information based on the section label
//   switch (sectionLabel) {
//     case 'name':
//       // Assume the name is the first token in the section
//       resumeJSON.name = section[0];
//       break;
//     case 'email':
//       // Assume the email is the last token in the section
//       resumeJSON.email = section[section.length - 1];
//       break;
//     case 'phone':
//       // Assume the phone is the last token in the section
//       resumeJSON.phone = section[section.length - 1];
//       break;
//     case 'address':
//       // Assume the address is the whole section
//       resumeJSON.address = sectionText;
//       break;
//     case 'summary':
//       // Assume the summary is the whole section
//       resumeJSON.summary = sectionText;
//       break;
//     case 'objective':
//       // Assume the objective is the whole section
//       resumeJSON.objective = sectionText;
//       break;
//     case 'education':
//       // Assume the education is an array of objects with fields such as institution, degree, start date, end date, etc.
//       resumeJSON.education = resumeJSON.education || [];
//       // resumeJSON.education.push(parseEducationSection(section));
//       break;
//     case 'experience':
//       // Assume the experience is an array of objects with fields such as company, position, start date, end date, description, etc.
//       resumeJSON.experience = resumeJSON.experience || [];
//       // resumeJSON.experience.push(parseExperienceSection(section));
//       break;
//     case 'skills':
//       // Assume the skills are an array of strings
//       resumeJSON.skills = resumeJSON.skills || [];
//       resumeJSON.skills.push(...section);
//       break;
//     case 'languages':
//       // Assume the languages are an array of strings
//       resumeJSON.languages = resumeJSON.languages || [];
//       resumeJSON.languages.push(...section);
//       break;
//     case 'interests':
//       // Assume the interests are an array of strings
//       resumeJSON.interests = resumeJSON.interests || [];
//       resumeJSON.interests.push(...section);
//       break;
//     case 'references':
//       // Assume the references are an array of objects with fields such as name, relation, contact, etc.
//       resumeJSON.references = resumeJSON.references || [];
//       // resumeJSON.references.push(parseReferencesSection(section));
//       break;
//     default:
//       // Ignore any other section
//       break;
//   }
// }


  try {
//     // const tokenizer = new natural.SentenceTokenizer();
//     // const sentences = tokenizer.tokenize(resumeText);
//     // console.log(sentences)

//     // Extract work experience entries
//     // const workExperience: string[] = [];
//     // let inExperienceSection = false;

//     // for (const sentence of sentences) {
//     //   if (sentence.toLowerCase().includes("experience")) {
//     //     inExperienceSection = true;
//     //   }

//     //   if (inExperienceSection) {
//     //     workExperience.push(sentence);
//     //   }
//     // }

//     // // Display the extracted work experience entries
//     // console.log("Work Experience:");
//     // workExperience.forEach((entry, index) => {
//     //   console.log(`[${index + 1}] ${entry}`);
//     // });
//     // const tokenizer = new natural.SentenceTokenizer();
//     // const sentences = tokenizer.tokenize(data);

//     // // Extract work experience entries
//     // const workExperience: string[] = [];
//     // let inExperienceSection = false;

//     // for (const sentence of sentences) {
//     //   if (sentence.toLowerCase().includes("experience")) {
//     //     inExperienceSection = true;
//     //   }

//     //   if (inExperienceSection) {
//     //     workExperience.push(sentence);
//     //   }
//     // }

//     // // Display the extracted work experience entries
//     // console.log("Work Experience:");
//     // workExperience.forEach((entry, index) => {
//     //   console.log(`[${index + 1}] ${entry}`);
//     // });

    return NextResponse.json(
      { message: "tokenized data", data, error: {} },
      // { message: "tokenized data", data: JSON.stringify(resumeJSON, null, 2), error: {} },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "error", data: null, error },
      { status: 500 }
    );
  }
}
