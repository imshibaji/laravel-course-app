import React from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Or any other style

export interface CodeProps {
  inline?: boolean;
  node?: any;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}


export default function AppMarkdown({content}: {content?: React.ReactNode}) {
      return (
        <Markdown
          components={{
            code({ node, inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula} // Apply the chosen style
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content || ""}
        </Markdown>
      );
    }