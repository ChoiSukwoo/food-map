export interface FeedbackDTO {
  id: number;
  content: string;
  timestamp: string;
}

export interface Feedback {
  id: number;
  content: string;
  timestamp: number;
}

export const FeedbackDtoToFeedback = (dto: FeedbackDTO) => {
  return { ...dto, timestamp: new Date(dto.timestamp).getTime() / 1000 };
};
