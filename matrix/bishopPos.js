 
function solve(mat,row,col){ 

function ispossible( r, c)
{
    return (r>=0 && r<8 && c>=0 && c<8);
}
 
    let count=0;
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if(c[i][j]=='#') 
            {
                if(ispossible(i-1,j-1) && c[i-1][j-1]=='#')  
                    if(ispossible(i+1,j-1) && c[i+1][j-1]=='#')
                        if(ispossible(i-1,j+1) && c[i-1][j+1]=='#')
                            if(ispossible(i+1,j+1) && c[i+1][j+1]=='#')
                            {
                                 console.log(i+1+" "+j+1)
                            }
                
            }
        }
    }     
}
 