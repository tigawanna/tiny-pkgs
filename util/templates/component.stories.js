module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";
import '../index.css'
export default {
    title: "${componentName}"
};

export const Simple${componentName} = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
    <${componentName}  />
    </div>
    );

}


`,
  extension: `.stories.tsx`,
});
