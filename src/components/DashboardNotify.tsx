
const DashboardNotify = () => {
  return (
    <div className="bg-white border-2 border-amber-300 w-[93%] p-5 m-2 rounded-lg md:w-[470px]">
      <div className="flex item-center justify-between">
        <span>Pending Invites</span>
<span className="material-symbols-outlined text-yellow-400">
person
</span>
      </div>
      <h2 className="font-bold text-2xl">3</h2>
      <span className="text-gray-400">Groups waiting for your response</span>
    </div>
  );
};

export default DashboardNotify;
