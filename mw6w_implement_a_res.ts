TypeScript
interface ChatbotConfiguration {
  id: string;
  name: string;
  description: string;
  accessToken: string;
  apiUrl: string;
}

interface Intents {
  [key: string]: {
    intentName: string;
    intentDescription: string;
    responses: string[];
  };
}

interface Entity {
  entityId: string;
  entityName: string;
  entityType: string;
}

interface Message {
  text: string;
  intent: string;
  entities: Entity[];
}

interface Response {
  responseText: string;
  responseCard?: {
    title: string;
    buttons: {
      text: string;
      url: string;
    }[];
  };
}

interface ChatbotResponse {
  responses: Response[];
}

class ChatbotIntegrator {
  private config: ChatbotConfiguration;
  private intents: Intents;
  private entities: Entity[];

  constructor(config: ChatbotConfiguration, intents: Intents, entities: Entity[]) {
    this.config = config;
    this.intents = intents;
    this.entities = entities;
  }

  processMessage(message: Message): ChatbotResponse {
    // TO DO: implement message processing logic
    return {
      responses: [
        {
          responseText: 'Welcome to our chatbot!',
        },
      ],
    };
  }
}

export { ChatbotConfiguration, Intents, Entity, Message, Response, ChatbotResponse, ChatbotIntegrator };