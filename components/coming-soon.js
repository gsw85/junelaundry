export default function ComingSoon({
  hasFooter = false,
  hasTopMenu = false,
  customHeight = "",
}) {
  let height = `h-[calc(100vh)]`;
  if (hasTopMenu) height = `h-[calc(100vh-64px)]`;
  if (hasFooter) height = `h-[calc(100vh-64px)] xl:h-[calc(100vh-474px)]`;
  if (hasFooter && hasTopMenu)
    height = `xl:h-[calc(100vh-538px)] h-[calc(100vh-64px)]`;

  if (customHeight) height = customHeight;

  return (
    <div className={`flex flex-col items-center justify-center ${height}`}>
      <h2 className="mb-8 animate-pulse text-5xl font-bold text-white">
        Coming Soon
      </h2>
      <div className={`text-center text-lg text-white`}>
        <p>
          {`We're working hard to bring you something amazing. Stay tuned!`}
        </p>
        <p>
          {"Follow our "}
          <a
            href={"https://www.facebook.com/JuneLaundryShop/"}
            target={"_blank"}
            className={`text-green-500 hover:text-green-600`}
          >
            Facebook Page
          </a>
          {" for Latest update!"}
        </p>
      </div>
    </div>
  );
}
