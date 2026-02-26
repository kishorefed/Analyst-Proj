import { apiClient } from './client';

/** Response from POST /api/conversation/start */
export interface ConversationStartResponse {
  success: true;
  data: {
    message: string;
    sessionInfo: {
      sessionId: number;
      projectName: string;
      clientName: string;
      domain: string;
      leadBA: string;
    };
  };
}

/** Extracted requirement from message response */
export interface ExtractedRequirement {
  id: number;
  reqNumber: string;
  text: string;
  category: string;
  priority: string;
  confidence: number;
  actor: string;
  action: string;
  object: string;
}

/** Analysis from message response */
export interface MessageAnalysis {
  requirementCaptured: boolean;
  confidence: number;
  category: string;
  nextQuestion?: string;
  gapsDetected?: string[];
}

/** Response from POST /api/conversation/message */
export interface ConversationMessageResponse {
  success: true;
  data: {
    aiResponse: string;
    requirementCaptured: boolean;
    requirement?: ExtractedRequirement;
    analysis?: MessageAnalysis;
    conversationContinues: boolean;
  };
}

export async function startConversation(
  sessionId: number
): Promise<ConversationStartResponse> {
  const { data } = await apiClient.post<ConversationStartResponse>(
    '/api/conversation/start',
    { sessionId }
  );
  return data;
}

export async function sendConversationMessage(
  sessionId: number,
  message: string
): Promise<ConversationMessageResponse> {
  const { data } = await apiClient.post<ConversationMessageResponse>(
    '/api/conversation/message',
    { sessionId, message }
  );
  return data;
}
