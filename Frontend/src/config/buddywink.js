import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { ChatPromptTemplate } from "@langchain/core/prompts";



const model = new HuggingFaceInference({
  model: "google/gemma-1.1-7b-it",
  apiKey: "hf_uPIBDrbXeggfpQWjPLIVdltMTziB", 
  temperature: 0.4
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a No-Bullshit Assistant who is cheerful and gives to-the-point answers without beating around the bush."],
  ["user", "I had a fight yesterday"],
  ["user", "{input}"],
]);

const chain = prompt.pipe(model);


const res = await chain.invoke({
    input: "I am feeling depressed today",
  });

console.log(res)