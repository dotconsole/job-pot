
// import { pipeline } from '@xenova/transformers';
import OpenAI from 'openai';
// import * as xenova from '@xenova/transformers'
import * as pdfjsLib from "pdfjs-dist";
import 'pdfjs-dist/build/pdf.worker.entry';
// import pdf from 'pdf-parse'
// import * as natural from 'natural'

import { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
// import { nlp } from './natural-processing';
import { getENV } from '.';

class ApplyToGoPipeline {

  private async getPipeline(task: string, model?: string) {
    // return pipeline(task, model, { progress_callback: undefined });

    // if (this.instance === null) {
    // Uncomment this to change the cache directory
    // env.cacheDir = './.cache';

    // this.instance = pipeline(this.task, this.model, { progress_callback });
    // }
  }
  async suggestJobRoles(jobTitle: string) {
    const task = 'text-classification';
    const model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
    const pipelineInstance = await this.getPipeline(task, model);
    // const results = await pipelineInstance(jobTitle);
    // return results;
  }

  async scanResume(resumeText: string, jobDescription: string) {
    const task = 'text-classification';
    const model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
    const pipelineInstance = await this.getPipeline(task, model);
    // const results = await pipelineInstance([resumeText, jobDescription]);
    // return results;
  }
  async extractResumeText(resumeText: string, jobDescription: string) {
    const task = 'text-generation';
    const model = 'Xenova/gpt2-large-uncased';
    const pipelineInstance = await this.getPipeline(task, model);
    // const results = await pipelineInstance([resumeText, jobDescription]);
    // return results;
  }


  tokenizeText(msg: string) {
    // const tokenizer =  new natural.SentenceTokenizer()
    // return tokenizer.tokenize(msg)
  }

  async convertPDFToText(fileBuffer: any) {
    const pdfDocument = await pdfjsLib.getDocument({ data: fileBuffer }).promise;
    // const numPages = pdfDocument.numPages;
    // // console.log({ numPages })
    // let textContent = "";




    // let availableSections = ['SUMMARY', 'WORK EXPERIENCE', 'SIDE PROJECTS', 'PUBLICATIONS', 'EDUCATION AND CERTIFICATES', 'TECHNICAL SKILLS', 'LANGUAGES'];
    // // console.log(resumeText.split(regex), resumeText.split(regex).length)
    // const sections = {} as any;
    // const usedSections: string[] = [];
    // let currSec = "";


    // for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    //   const page = (await pdfDocument.getPage(pageNum)) as PDFPageProxy;
    //   const pageText = (await page.getTextContent()) as any;
    //   console.log({ pageText })
    //   pageText.items.forEach((item: any) => {
    //     if (availableSections.includes(item.str) && !usedSections.includes(item.str)) {
    //       usedSections.push(item.str);
    //       sections[item.str] = "";
    //       currSec = item.str;
    //     } else {
    //       sections[currSec] += item.str + " ";
    //     }



    //     // textContent += item.str + " ";
    //     // textContent += item.str + " ";
    //     // console.log(item.str)

    //     // if(item.str === 'SUMMARY') {
    //     //   // textContent += `\n${item.str}\n`;
    //     //   textContent += ". \nSUMMARY";
    //     // } else {
    //     //   textContent += item.str + " ";
    //     // }
    //   });
    // }
    // return sections
    // return "textContent"
    return {}
  }

  async generateCoverLetter(jobTitle: string, jobUrl: string) {
    const apiKey = getENV("OPENAI_API");
    
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

    const result = await openai.chat.completions.create({
      messages: [
        { role: "system", "content": `You are an expert in drafting cover letters for applying for jobs, You create succinct cover letters that's not more than 200 words for job titles given to you` },
        { role: "user", "content": `Draft a cover letter for me with the job title ${jobTitle}, listed at ${jobUrl}` }
      ],
      model: 'gpt-3.5-turbo'
    })
    return result.choices[0].message.content || "";
  }



  async analyzeResume(resumeText: string) {
    const apiKey = getENV("OPENAI_API");
    const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

    const completion = await openai.chat.completions.create({
      //     messages: [{ role: "user", content:
      //     //   `tell me which job title fits the owner of this resume below and generate 5 new roles that can be added to make the resume look better based on the role you deduced from its job title. Don't use more than 500 words
      //     //   """${resumeText}""" 
      //     // `

      //     `Create a javascript array of 10 strings of not more than 50 words each of the roles of a Full Stack Developer that can used as bullet points in a resume. Make each word quantifiable with percentages or achievements such as enhancing..., improving... etc
      //   `
      // }],
      messages: [{
        "role": "system",
        "content":
          `You are an expert resume writer and reviewer, you optimize resumes to make people land their dream jobs.
          When given a JSON object of different sections of a resume, you will review and rewrite the parts that have valid key names in the JSON object to make them more suitable for applying for a job.
          If you are given the resume object alongside a job object, you will modify those resume sections to increase the chances of getting the job and generate an accompanying covert letter of not more than 300 words.          
          ` },
      // {
      //   "role": "user", "content": `Analyze the CV below and do your magic

      //   """INDEPENDENT 
      //   DESIGNER 
      //   Professional Summary 
      //   Independent and results driven Design Professional 
      //   with an extensive background in the design process. Proficient in taking initiative, along with 
      //   a desire to achieve client satisfaction, for a record of accomplished results. 
      //   Skills Space Planning Workplace Strategy Project Coordination FF&E Expertise Problem Resolution ADA & 
      //   Building Codes Written & Verbal Communication Product Specification AutoCAD MS Office Suite Salesforce ADA, 
      //   Specification AutoCAD, Strategy Budgets, Verbal Communication Change management, 
      //   Written COUNCIL Creativity Customer satisfaction Direction Documentation Innovation Interior design Team lead Leadership Materials Meetings MS Office Suite Office Organizational Personnel Presentations Problem Resolution Processes Procurement Programming Project Coordination Real Estate Retail Sales Space Planning Work History INDEPENDENT DESIGNER , 04/2020 to Current Company Name – City , State Create Site and Fixture Plans utilizing AutoCAD for Walgreens, Chipotle, and Aspen Dental for use by Real Estate Developers and Property Investors. Perform on-site surveys to produce AutoCAD floor plan drawings of existing spaces for electronic documentation, in addition to providing space improvement solutions and options. SPECIFICATIONS MANAGER , 01/2015 to 03/2020 Company Name – City , State Traveled extensively throughout my territory creating and conducting product presentations/meetings for Architects, Designers, Builders, Furniture Manufacturers, Facility Managers, Retail and Commercial End Users. Initiated new business and grew existing accounts by 40 percent while maintaining/nurturing relationships. Identified and targeted high value projects in planning stages to drive specifications, resulting in exceeded sales goals. WORKPLACE CONSULTANT , 01/2003 to 01/2015 Company Name – City , State Worked as team lead in creating well-connected workplaces utilizing design processes from programming and design analysis to space planning and aesthetics, while adhering to applicable building and ADA codes. Reduced Office Real Estate by introducing new ways of working by making use of change management skills. Introduced to stake-holders organizational agility and flexibility resulting in improved communication, collaboration, creativity, innovation and employee satisfaction. Developed Corporate wide standards for efficiency of space management and procurement. Supervised furniture installation, materials and equipment for large commercial projects with budgets in excess of $1,000,000. Coordinated projects ranging from 1000 sf up to 1,000,000 sf throughout Corporate Real Estate portfolio. Provided leadership in planning, development and execution of large personnel relocations and reconfigurations, resulting in successful and timely completion, minimum disruption and successful customer satisfaction based on post-occupancy evaluations. SENIOR INTERIOR DESIGNER , 01/1994 to 01/2003 Company Name – City , State Utilized interior design process across conceptual, schematic, design development and construction document phases. Created professional presentations to communicate design intent and direction. Education Bachelor of Arts : Interior Design IOWA STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY - City , State NATIONAL COUNCIL FOR INTERIOR DESIGN QUALIFICATION Certificate #009891 Work History INDEPENDENT DESIGNER , 04/2020 to Current Company Name – City , State Create Site and Fixture Plans utilizing AutoCAD for Walgreens, Chipotle, and Aspen Dental for use by Real Estate Developers and Property Investors. Perform on-site surveys to produce AutoCAD floor plan drawings of existing spaces for electronic documentation, in addition to providing space improvement solutions and options. SPECIFICATIONS MANAGER , 01/2015 to 03/2020 Company Name – City , State Traveled extensively throughout my territory creating and conducting product presentations/meetings for Architects, Designers, Builders, Furniture Manufacturers, Facility Managers, Retail and Commercial End Users. Initiated new business and grew existing accounts by 40 percent while maintaining/nurturing relationships. Identified and targeted high value projects in planning stages to drive specifications, resulting in exceeded sales goals. WORKPLACE CONSULTANT , 01/2003 to 01/2015 Company Name – City , State Worked as team lead in creating well-connected workplaces utilizing design processes from programming and design analysis to space planning and aesthetics, while adhering to applicable building and ADA codes. Reduced Office Real Estate by introducing new ways of working by making use of change management skills. Introduced to stake-holders organizational agility and flexibility resulting in improved communication, collaboration, creativity, innovation and employee satisfaction. Developed Corporate wide standards for efficiency of space management and procurement. Supervised furniture installation, materials and equipment for large commercial projects with budgets in excess of $1,000,000. Coordinated projects ranging from 1000 sf up to 1,000,000 sf throughout Corporate Real Estate portfolio. Provided leadership in planning, development and execution of large personnel relocations and reconfigurations, resulting in successful and timely completion, minimum disruption and successful customer satisfaction based on post-occupancy evaluations. SENIOR INTERIOR DESIGNER , 01/1994 to 01/2003 Company Name – City , State Utilized interior design process across conceptual, schematic, design development and construction document phases. Created professional presentations to communicate design intent and direction. Skills Space Planning Workplace Strategy Project Coordination FF&E Expertise Problem Resolution ADA & Building Codes WWritten & Verbal Communication Product Specification AutoCAD MS Office Suite Salesforce, ADA, AutoCAD, budgets, change management, COUNCIL, creativity, customer satisfaction, direction, documentation, innovation, interior design, team lead, leadership, materials, meetings, MS Office Suite, Office, organizational, personnel, presentations, Problem Resolution, processes, procurement, programming, Project Coordination, Real Estate, Retail, sales, Space Planning, Specification, Strategy, Verbal Communication, Written Additional Information STATE OF ILLINOIS LICENSE , Registered Interior Designer #161.000401 ."""

      //   `},
      // {
      //   "role": "assistant", "content": `{
      //     Profession: "DESIGNER",
      //     "Highlighted Skills": ["Space Planning", "Workspace Strategy", "Project Coordination"],
      //     "Summary": "A designer with extensive years of experience, proficient in taking initiative, along with 
      //     a desire to achieve client satisfaction, for a record of accomplished results.",
      //     "Suggested Roles": ["Placed orders accordingly and scheduled deliveries", "Interfaced with contractor and installers to ensure proper procurement", "Attended company sales meetings to establish new goals and sales quotas],
      //   }


      // ` },
      {
        "role": "user", "content": `Review and improve this resume for me and maintaining the fields in the object provided, ignore anything else without field name in the object and write a cover letter to Dotconsole seeking a Senior Frontend role
      """${resumeText}"""
      ` }],
      model: "gpt-4",
      // model: "gpt-3.5-turbo-1106",
      // response_format: { type: "json_object" },
    });

    console.log(completion.choices)

    return completion.choices[0].message.content || "";
    // const openaiEndpoint = 'https://api.openai.com/v1/completions'; // Use the appropriate endpoint for your task
    // const prompt = `Analyze the resume text below
    //   """${resumeText}""" 
    // `;

    // const response = await fetch(openaiEndpoint, {
    //   method: "POST",
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`,
    //   },
    //   body: JSON.stringify({
    //     prompt: prompt,
    //     max_tokens: 100, // Adjust as needed
    //   })
    // });

    // const data = await response.json()
    // console.log({data})
    // console.log(data.data.choices[0].text)

    // return data.data.choices[0].text;
  }
}

export const jobCrate = new ApplyToGoPipeline();