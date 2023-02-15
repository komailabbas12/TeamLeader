import React from 'react';
import Navigation from './Src/Navigation/index';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
function App() {
  return (
    <Navigation />
  )
}
export default App;