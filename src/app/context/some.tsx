// // Import the dependencies 
// import { useRef, useState, useEffect } from 'React'; 
// import Head from 'next/Head'; 
// import '@tensorflow/tfjs-core'; 
// import '@tensorflow/tfjs-converter'; 
// import '@tensorflow/tfjs-backend-webgl'; 
// import * as useQna from '@tensorflow-models/qna'; 
// import * as universalSentenceEncoder from '@tensorflow-models/universal-sentence-encoder'; 
// import pdfParse from 'pdf-parse'; 
// import Tesseract from 'tesseract.js'; 
// import stringSimilarity from 'string-similarity-js'; 
// import cosineSimilarity from 'cosine-similarity'; 
// import ReactHighlightWords from 'react-highlight-words'; 
// import ReactMarkdown from 'react-markdown';

// // Define the resume and the job description as PDF files 
// const resumeFile = '/resume.pdf'; const jobFile = '/job.pdf';

// // Define a function to convert a PDF file into plain text 
// const pdfToText = async (file) => { 
// // Fetch the file from the public folder 
// const response = await fetch(file); 
// const data = await response.arrayBuffer();

// // Parse the file using pdf-parse 
// const result = await pdfParse(data);

// // Return the text content 
// return result.text; 
// };

// // Define a function to extract keywords, skills, and entities from a text using use-qna model 
// const extractKeywords = async (text, model) => { 
// // Define some sample questions to ask the model 
// const questions = [ 
//   'What are the skills required for this position?', 
//   'What are the qualifications required for this position?', 
//   'What are the responsibilities of this position?', 
//   'What are the achievements of this candidate?', 
//   'What are the education and experience of this candidate?', 
// ];

// // Define an array to store the answers 
// const answers = [];

// // Loop through the questions and get the answers from the model 
// for (const question of questions) { 
//   const result = await model.findAnswers(question, text);
//    // If there is an answer, push it to the array 
//    if (result.length > 0) { answers.push(result[0].text); } 
//   }

// // Return the array of answers 
// return answers; 
// };

// // Define a function to compare two arrays of keywords and return a similarity score 
// const compareKeywords = (keywords1, keywords2) => { 
//   // Define a variable to store the score 
//   let score = 0;

// // Loop through the first array of keywords 
// for (const keyword1 of keywords1) { 
//   // Loop through the second array of keywords 
//   for (const keyword2 of keywords2) { 
//     // Calculate the string similarity between the two keywords 
//     const similarity = stringSimilarity.compareTwoStrings(keyword1, keyword2); 
//     // If the similarity is above a threshold, add it to the score 
//     if (similarity > 0.5) { score += similarity; } 
//   } 
// }

// // Return the normalized score 
// return score / (keywords1.length + keywords2.length); 
// };

// // Define a function to compare two texts and return a similarity score 
// const compareTexts = async (text1, text2, model) => { 
//   // Encode the texts using the universal-sentence-encoder model const embeddings = await model.embed([text1, text2]);

// // Get the tensors from the embeddings const tensors = embeddings.arraySync();

// // Calculate the cosine similarity between the tensors const similarity = cosineSimilarity(tensors[0], tensors1);

// // Return the similarity return similarity; };

// // Define the main component function Home() { // Define the refs for the file inputs const resumeRef = useRef<HTMLInputElement>(null); const jobRef = useRef<HTMLInputElement>(null);

// // Define the states for the texts, keywords, and scores const [resumeText, setResumeText] = useState<string>(''); const [jobText, setJobText] = useState<string>(''); const [resumeKeywords, setResumeKeywords] = useState<string[]>([]); const [jobKeywords, setJobKeywords] = useState<string[]>([]); const [keywordScore, setKeywordScore] = useState<number>(0); const [textScore, setTextScore] = useState<number>(0);

// // Define the states for the models const [useQnaModel, setUseQnaModel] = useState<useQna.QnA>(); const [universalSentenceEncoderModel, setUniversalSentenceEncoderModel] = useState<universalSentenceEncoder.UniversalSentenceEncoder>();

// // Load the models when the component mounts useEffect(() => { // Load the use-qna model useQna.load().then((model) => { setUseQnaModel(model); });

export {}