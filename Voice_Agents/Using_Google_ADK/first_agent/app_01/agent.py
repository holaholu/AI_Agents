
from google.adk.agents import Agent

root_agent = Agent(
    name="ai_news_agent_simple",
    model="gemini-2.5-flash-native-audio-preview-09-2025", # Essential for live voice interaction
    instruction="You are an AI News Assistant.",
)
