
export default function Header (){
    return (
        <div className="shadow bg-white">
  <div className="h-16 mx-auto px-5 flex items-center justify-between">
      <a className="text-black text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
      
      <ul className="justify-center text-black flex items-center gap-5">
        <li><a className="hover:text-cyan-500 transition-colors" href="">contact us</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="">about us</a></li>
        <li><a className="hover:text-cyan-500 transition-colors" href="">home page</a></li>

        </ul>
        
        
  </div>
</div>
    )
}