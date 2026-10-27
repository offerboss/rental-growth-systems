// Simple responsive 16:9 YouTube embed using the privacy-enhanced domain.
// No player SDK/dependency — a plain lazy-loaded iframe is enough here.

export default function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="mx-auto w-full max-w-[960px]">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.28)]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
