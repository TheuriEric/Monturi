///////Chatbot Section///////              ///////Chatbot Section////
const context = `Monturi was founded by Eric Theuri in the year 2025 June. He identified a problem, increasing number of online scams related to crypto and the desire for people to understand and invest in the financial world of forex, crypto and other financial instruments in decentralised finance. 
Monturi's mission is to empower today’s generation in making wise financial decisions for a secure and opportunity-rich future.
The Services/products we provide are: 
    1.Fintech consulting for startups and other businesses in the financial sector
    2. Roboadvisory whereby we do extensive market research on crypto and provide you, the client, with relevant first-hand information to enable you invest wisely.
    3.A financial dashboard that helps you track all your invested assets from one point
The team details:
    1. Eric Theuri-Managing Director
    2. Aisha Barasa-Chief Technical Officer
    3. Benson Mose- Senior Relationship Managaer
    4. Polycarp Irungu - Human Resource

Problem Monturi Solves:
    1. Online scams related to crypto
    2. Inadequate knowledge regarding crypto and such instrument on the client cide
Team contacts/Support:
    Reach out to the company direct line : +254711366000 or via email monturifinance@gmail.com
Vision/Long-term goal:
    1.To be a leading force in transforming how people engage with money
    2. Educate people on matters regarding crypto and blockchain
 `//This is the brain of the chatbot. All the information that could be answered with the chatbot is here. Anything outside this is unavailable, for noow

 var questions = `1. Who founded the startup?
 2. What problem does it solve?
 What services or products does it offer?
 How can someone support or contact the team?
 What's the startup's vision or long-term goal?
 `//This is just the list of questions that the chatbot must be able to answer directly








 
 const chatMessagesContainer = document.getElementById('chat-messages');//This gets the whole chat area, where the text is displayed....(the screen)
 const prompt = document.getElementById('user-input');//This is the user input(What the user has asked)
 const send = document.getElementById("send-button");//Gets the send button. We will use it to make the chatbot interactive
 const allSampleQuestionsButtons = document.querySelectorAll(".sample-button")//This is now the all the 'faqs'. Questions that are readily answered by the chatbot. You click the button and AI works.
///This is code to update the conversation field
 function addMessage(text, sender) { //This function is used to update the chat section. The user has asked a question and the AI has produced the output.
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    const p =document.createElement('p');
    p.textContent = text;
    messageDiv.appendChild(p)
    chatMessagesContainer.appendChild(messageDiv);
 }
 async function sendMessage(params) {//To create a continuous cycle of sending and receiving messages
    const messageText = prompt.value.trim()//Gets the user input/prompt and trims it
    //Now to evaluate if the user input is okay
    if (messageText === '') {
        addMessage("Ask a question about Monturi :)")
        return;
    }
    addMessage(messageText, 'user');//Shows the user's prompt in the chat area(like a bubble convo)
    prompt.value = ''; //clear the input field
    try {
        const response = await puter.ai.chat(messageText, {system : context}
        );
        if (response && response.content) {
            addMessage(response.content, 'bot'); //This now shows the bot response via AI
        }
        else {
            addMessage("I am unable to answer that at the momment ):")
        }
    }catch (error) {
       addMessage("Servers are busy! Please try again...") ///Incase something goes wrong and the chatbot is unable to work as expected we display this error message
    }
    
 }
 //This next part is to 'send' prompts to puter....like just pressing Enter or send button
 if(send && prompt) {
    send.addEventListener('click', sendMessage); //The user prompt is sent when the send button is pressed
    prompt.addEventListener('keypress', (event) => { //This also sends the message but now when the Enter key is pressed
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
 }
 //This part now implements the part where a user selects a question from the already listed ones

 if (allSampleQuestionsButtons.length > 0) { //Ensures the sample questions actually exist?
    allSampleQuestionsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.CDATA_SECTION_NODE.question;
            prompt.value = question; //This adds the seleced question as the prompt and the chatbot works.
            sendMessage() //This is now the Send function. The button has been selected, yes, but this function now sends it to the chatbot for ai to happen
        });
    });

 }
