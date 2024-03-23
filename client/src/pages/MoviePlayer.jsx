export async function loader() {
  return null;
}

export default function MoviePlayer() {
  return (
    <div className="grid place-items-center bg-primary p-10">
      <video
        controls
        className="block aspect-video max-w-full w-[500px]"
        src="https://res.cloudinary.com/dyo9kvck4/video/upload/v1711195590/EntertainmentWebApp/videos/movie_hxe5zh.mp4"
      />
    </div>
  );
}
