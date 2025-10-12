// src/pages/Home/DeveloperTerminal.jsx
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';

// ========= Styled Components ========
const TerminalRoot = styled('section')(({ theme }) => ({
  padding: '28px 16px',
}));

const TerminalWindow = styled(Box)(({ theme }) => ({
  maxWidth: 900,
  margin: '0 auto',
  borderRadius: 12,
  padding: 18,
  background: '#0b0f14',
  border: `1px solid rgba(255,255,255,0.04)`,
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), 0 8px 30px rgba(0,0,0,0.5)',
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace",
  color: '#dbe7ff',
}));

// small typing hook that renders lines sequentially
function useTypedLines(lines = [], charSpeed = 28, lineDelay = 700) {
  const [out, setOut] = React.useState([]);
  React.useEffect(() => {
    let mounted = true;
    let lineIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      if (!mounted) return;
      const current = lines[lineIndex] || '';
      setOut((prev) => {
        const copy = [...prev];
        copy[lineIndex] = (copy[lineIndex] || '') + current.charAt(charIndex);
        return copy;
      });
      charIndex += 1;
      if (charIndex >= current.length) {
        // move to next line after delay
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < lines.length) {
          setTimeout(typeNextChar, lineDelay);
        }
      } else {
        setTimeout(typeNextChar, charSpeed);
      }
    };

    // initialize array
    setOut(lines.map(() => ''));
    setTimeout(typeNextChar, 300);
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines.join('|')]);

  return out;
}

// ======== Component =======
export default function DeveloperTerminal() {
  const theme = useTheme();

  const lines = [
    '$ whoami',
    'Shivank Singh — MERN Stack Developer',
    '$ skills --top',
    'React.js, Next.js, Node.js, MongoDB, Redux Toolkit, TypeScript',
    '$ motto',
    '"Clean code. Thoughtful UI. Real impact."',
  ];

  const typed = useTypedLines(lines, 20, 500);

  return (
    <TerminalRoot id="terminal">
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.light, textAlign: 'center' }}
      >
        Developer Terminal
      </Typography>

      <TerminalWindow>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
        </Box>

        <Box sx={{ minHeight: 120 }}>
          {typed.map((t, i) => (
            <Typography
              key={i}
              sx={{
                color: t.startsWith('$') ? theme.palette.secondary.light : '#cfe1ff',
                mb: 0.5,
                whiteSpace: 'pre-wrap',
                fontSize: 14,
              }}
            >
              {t || (t === '' && <span style={{ opacity: 0.3 }}> </span>)}
            </Typography>
          ))}
        </Box>

        <Typography sx={{ mt: 2, color: theme.palette.text.secondary, fontSize: 13 }}>
          Tip: You can replace these lines with dynamic commands or show live logs.
        </Typography>
      </TerminalWindow>
    </TerminalRoot>
  );
}
