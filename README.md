# Next.js Screen Sharing & Communication Tool

A comprehensive web application built with Next.js that combines voice communication, screen recording, and chat functionality in a single, intuitive interface.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KanishkRastogi/screen-share.git
```

2. Install dependencies:
```bash
cd screen-share
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`



## Features

### Voice Communication
The application provides real-time voice communication capabilities:
- Audio input capture and analysis using the Media Stream API
- Interactive canvas-based audio visualization
- Simple controls for starting and stopping voice recording
- Real-time audio feedback and monitoring

### Screen Recording
Built-in screen capture functionality with a user-friendly interface:
- Custom screen recording utility for capturing display content
- Live preview of the recorded stream
- Intuitive recording controls with clear visual feedback
- Screen capture output displayed in a dedicated video element

### Chat Interface
Integrated messaging system for communication:
- Clean and simple messaging UI
- Message input and display functionality
- Simulated bot responses for testing
- Real-time message updates

## Technical Details

### Frontend
- Built with Next.js for optimal performance and SEO
- Styled using Tailwind CSS for responsive design
- Dynamic gradient background with custom animations
- Interactive feature switching between Voice, Screen Share, and Chat modes

### Design
- Responsive layout that works across different device sizes
- Animated gradient background for visual engagement
- Consistent UI/UX across all features
- Modern and clean interface design



## Usage

### Voice Communication
1. Click on the Voice tab in the main navigation
2. Grant microphone permissions when prompted
3. Use the start/stop controls to manage voice recording
4. View the audio visualization on the canvas

### Screen Recording
1. Navigate to the Screen Share section
2. Click "Record" to begin screen capture
3. Select the screen/window you want to share
4. Use the stop button to end recording

### Chat Interface
1. Select the Chat feature from the main menu
2. Type your message in the input field
3. Press enter or click send to transmit
4. View bot responses in the chat window


## Note
`navigator.mediaDevices.getDisplayMedia()` is not supported on Android or iOS device browsers, so screen recording won't work on mobile phone
