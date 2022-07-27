

export const  getIcons = (icons) =>{
    let tmp = icons;
    let start=0
    let end=tmp.length-1
    let margin=120;
    while(start<=end){
        tmp[start]={icon:tmp[start],marginTop:margin}
        if(start===end) break;
        tmp[end]={icon:tmp[end],marginTop:margin}
        margin=margin/2
        start=start+1
        end=end-1
    }

    return tmp;
}

export const getGridData = () =>{
    return ["Incubator/Accelerator","Coporations","Investor","Startup","Open Challenge"]
}