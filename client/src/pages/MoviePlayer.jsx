export async function loader() {
  return null;
}

export default function MoviePlayer() {
  return (
    <div className="grid place-items-center absolute inset-0 bg-primary">
      <video
        controls
        className="block max-w-full aspect-video pr-5 pb-5 max-auto"
        width="800"
        height="800"
        src="https://res.cloudinary.com/dyo9kvck4/video/upload/v1711195590/EntertainmentWebApp/videos/movie_hxe5zh.mp4"
      />
    </div>
  );
}
