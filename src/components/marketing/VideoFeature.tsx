import { Box, Text } from '@mantine/core';
import { SectionHeading } from '../site/SectionHeading';

interface VideoFeatureProps {
  label?: string;
  title: string;
  body?: string;
  embedUrl?: string;
  mp4Src?: string;
  posterSrc?: string;
  caption?: string;
}

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/,
  );
  return match
    ? `https://www.youtube-nocookie.com/embed/${match[1]}`
    : url;
}

export function VideoFeature({
  label,
  title,
  body,
  embedUrl,
  mp4Src,
  posterSrc,
  caption,
}: VideoFeatureProps) {
  return (
    <Box>
      <SectionHeading label={label} title={title} subtitle={body} maw={640} />

      <Box
        style={{
          backgroundColor: 'var(--rar-panel)',
          border: '1px solid var(--rar-border)',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        {embedUrl ? (
          <Box
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={getYouTubeEmbedUrl(embedUrl)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </Box>
        ) : mp4Src ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={posterSrc}
            style={{ width: '100%', display: 'block' }}
          >
            <source src={mp4Src} type="video/mp4" />
          </video>
        ) : null}
      </Box>

      {caption && (
        <Text
          size="sm"
          mt="sm"
          ta="center"
          style={{ color: 'var(--rar-text-muted)', fontStyle: 'italic' }}
        >
          {caption}
        </Text>
      )}
    </Box>
  );
}
