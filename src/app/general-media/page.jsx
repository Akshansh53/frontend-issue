export default function(){
    const medias=[{
        name:"New York Weekly",
        link:"https://i0.wp.com/douglasrobbinsauthor.com/storage/2024/01/NY-Weekly.jpg?resize=1024%2C683&ssl=1"
    },
    {
        name:"US Insider",
        link:"https://cdn.prod.website-files.com/65e83cfcbcd7f076562b441a/65effeeee19c88e19a4de1ef_US%20Insider.png"
    },
    {
        name:"Indian Bulletin",
        link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFJhiay9cZPk2CSgS_ruRNcTmpXX3kd5guw&s"
    },
    {
        name:"Daily Hunt",
        link:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png"
    },
    {
        name:"News 24",
        link:"https://upload.wikimedia.org/wikipedia/commons/6/66/News24_Logo.jpg"
    },
    {
        name:"News Nation",
        link:"https://play-lh.googleusercontent.com/l01NEnkNP-IjuNmaXMawC4Cy-ikJ5iIDlcRLCukd0ABEVnltCeIft-0HYiF69HfprvdV=w526-h296-rw"
    },
    {
        name:"Flipboard",
        link:"https://cdn.flipboard.com/wp-content/uploads/sites/17/2015/02/red-horizontal-379x262.png"
    },
    {
        name:"Republic",
        link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBIe5NZxqZnWJNJz8ae9UPDpN1rSd7o-6Kw&s"
    },
    {
        name:"Business Standard",
        link:"https://www.speakin.co/edit/wp-content/uploads/2019/05/business-standard-logo-2.png"
    }
]
    return(
        <div className="bg-amber-300 h-screen flex justify-center items-center">
           <div className="bg-[#fff]   text-center">
            <h2 className="text-[#0B1C2E] font-extrabold font-sans text-4xl my-4">Credibility & Trust</h2>
            <div className="w-[87vw] p-[3vw] flex flex-wrap justify-center gap-3">
                {medias.map((media)=>{
                    return(
                        <img className="h-[18vw] md:h-[10vw]  sm:h-[10vw] mx-4" src={media.link} alt={media.name} />
                    )
                })}
            </div>
           </div>
            
        </div>
    )
}