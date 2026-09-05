# AI-Powered Mechanical Engineering Calculator - Project Plan

## Project Overview

An intelligent web application that allows users to interact with a conversational AI agent to ask questions about mechanical engineering calculations. The AI agent dynamically retrieves relevant data, executes calculations, and provides real-time answers to user queries.

**Example Use Case**: "If we change the inlet temperature from 50F to 90F, what will happen to the outlet temperature?"

---

## Core Concept

- **User Interface**: Text-only chat interface
- **AI Interaction**: Users ask natural language questions about engineering calculations
- **Dynamic Calculation**: AI agent uses function calling to execute relevant calculations
- **Data Integration**: Pull from custom calculators and Excel sheets
- **Result Visualization**: Display calculation results with charts and graphs

---

## Technology Stack

### Frontend
- **Framework**: Next.js
- **Visualization**: Chart.js
- **Styling**: (To be defined - colors from project-list.md)

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL (via Neon)
- **AI Model**: Google Gemini with function calling/tool use

### Integration
- **Calculation Engine**: 
  - Custom calculators
  - Excel sheets (parsed)
- **Direct integration** with calculation functions
- **Function calling** for dynamic execution

---

## Architecture Decisions

### User Authentication
- **Current**: Single-user application (no authentication)
- **Future**: Can be extended with multi-user support

### AI Integration Strategy
- **Method 1**: Function calling/tool use - AI calls defined functions to execute calculations
- **Method 2**: Direct integration - calculations embedded as backend services

### Data Persistence
- **Conversation History**: Stored in PostgreSQL
- **Calculation Parameters**: Stored with each conversation entry
- **Session Management**: Users can revisit past calculations

### Excel Integration
- **Strategy**: Parse Excel files into callable functions or data structures
- **Execution**: Treated as calculation sources accessible by AI agent

### Error Handling
- **Implementation**: Graceful error responses
- **AI Behavior**: Handle invalid inputs and out-of-range parameters appropriately
- **User Feedback**: Clear error messages for edge cases

---

## Data Model

### Core Entities

#### Conversations
- `id`: Unique identifier
- `created_at`: Timestamp
- `updated_at`: Timestamp
- `title`: Optional conversation title

#### Messages
- `id`: Unique identifier
- `conversation_id`: Reference to conversation
- `role`: 'user' or 'assistant'
- `content`: Text content
- `timestamp`: When message was created

#### Calculations
- `id`: Unique identifier
- `message_id`: Associated message
- `calculator_name`: Which calculator was used
- `input_parameters`: Object containing input values
- `output_results`: Object containing output values
- `timestamp`: When calculation was executed

#### Visualizations
- `id`: Unique identifier
- `calculation_id`: Associated calculation
- `chart_type`: Type of Chart.js chart
- `chart_config`: Configuration data for Chart.js
- `created_at`: Timestamp

---

## Features

### 1. Conversational Interface
- Text-based chat with Gemini AI
- Natural language understanding of engineering questions
- Context-aware responses based on conversation history

### 2. Dynamic Calculation Execution
- AI agent can call functions to run calculations
- Calculations are executed server-side
- Results returned in real-time

### 3. Calculator Integration
- Support for custom calculator functions
- Parse and integrate Excel sheets
- Modular calculator architecture

### 4. Conversation Persistence
- Store full conversation history
- Save calculation parameters with each interaction
- Allow users to revisit and review past sessions

### 5. Data Visualization
- Display calculation results with charts
- Use Chart.js for visualization
- Support multiple chart types

### 6. Error Handling
- Validate input parameters
- Handle out-of-range values gracefully
- Provide clear error messages to users

---

## Key Integration Points

### Gemini AI Integration
- **Model**: Google Gemini
- **Method**: Function calling / Tool use
- **Purpose**: Dynamic execution of calculations based on user queries

### Calculator Integration
1. **Custom Calculators**: JavaScript functions that accept parameters and return results
2. **Excel Sheets**: Parsed into callable functions or data lookup tables
3. **Backend Execution**: All calculations run on Node.js backend
4. **Direct Integration**: Calculations available to AI through defined interfaces

### Database Integration
- **Neon PostgreSQL**: Store conversations, messages, calculations, and metadata
- **Connection Pooling**: Handle concurrent requests efficiently

---

## Project Structure (Proposed)

```
/
├── frontend/                    # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── public/
│   └── styles/
├── backend/                     # Node.js backend
│   ├── api/
│   ├── calculators/            # Custom calculator functions
│   ├── services/               # Business logic
│   ├── models/                 # Database models
│   └── config/
├── data/                        # Excel sheets and calculation data
├── db/                          # Database schemas and migrations
└── docs/                        # Documentation
```

---

## Homepage Design

### Hero Section
- Banner highlighting "The Future of Engineering"
- Message: AI-powered calculations and parameter analysis
- Call-to-action to start chatting with the AI

### Global Styling
- Color scheme: (To be defined from project-list.md)
- Responsive design for desktop/mobile

---

## Development Workflow

### Phase 1: Setup & Infrastructure
- Initialize Next.js project
- Set up Node.js backend
- Configure PostgreSQL database
- Set up Gemini API integration

### Phase 2: Core Features
- Implement chat interface
- Create calculator framework
- Integrate Excel parsing
- Set up function calling with Gemini

### Phase 3: Data Persistence
- Implement conversation storage
- Store calculation parameters
- Build session management

### Phase 4: Visualization & Polish
- Integrate Chart.js
- Build visualization components
- Implement error handling
- Add styling

### Phase 5: Testing & Deployment
- Unit and integration tests
- Performance optimization
- Deployment configuration

---

## Open Questions / Future Considerations

1. **Scaling**: How many users and calculations per day?
2. **Calculator Library**: What specific mechanical engineering calculations will be supported initially?
3. **Excel Format**: What is the structure of existing Excel sheets?
4. **API Rate Limits**: How to handle Gemini API rate limits?
5. **Caching**: Should calculation results be cached?
6. **Export**: Should users be able to export results or conversations?
7. **Real-time Updates**: Do multiple concurrent users need real-time updates?
8. **Security**: What security measures are needed for calculation data?

---

## Success Criteria

- [ ] Users can ask natural language questions about calculations
- [ ] AI correctly identifies and executes relevant calculations
- [ ] Results are accurate and displayed in real-time
- [ ] Conversation history is preserved
- [ ] Visualizations are clear and helpful
- [ ] Error messages are helpful and informative
- [ ] Application is responsive and performant

---

## Resources & References

- **Gemini API Docs**: https://ai.google.dev/
- **Next.js**: https://nextjs.org/
- **Chart.js**: https://www.chartjs.org/
- **Neon PostgreSQL**: https://neon.tech/
- **Node.js**: https://nodejs.org/
