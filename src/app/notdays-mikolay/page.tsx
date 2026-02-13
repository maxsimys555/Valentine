import NotDayPage from "@/components/pages/NotDayPage";

export default function Home() {
  return (
    <NotDayPage
      title={
        <>
          Таке, як вже було наче,
          <br /> але не сьогодні!
        </>
      }
      bottomImageClassName="mt-25"
    />
  );
}

