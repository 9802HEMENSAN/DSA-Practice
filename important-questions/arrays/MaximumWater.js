 
	// // Javascript implementation of the approach
	
	// // Function to return the maximum
	// // water that can be stored
	// function maxWater(arr, n)
	// {

	// 	// To store the maximum water
	// 	// that can be stored
	// 	let res = 0;

	// 	// For every element of the array
	// 	// except first and last element
	// 	for(let i = 1; i < n - 1; i++)
	// 	{

	// 		// Find maximum element on its left
	// 		let left = arr[i];
	// 		for(let j = 0; j < i; j++)
	// 		{
	// 			left = Math.max(left, arr[j]);
	// 		}

	// 		// Find maximum element on its right
	// 		let right = arr[i];
	// 		for(let j = i + 1; j < n; j++)
	// 		{
	// 			right = Math.max(right, arr[j]);
	// 		}

	// 		// Update maximum water value
	// 		res += Math.min(left, right) - arr[i];
	// 	}
	// 	return res;
	// }
	
	// let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
	// let n = arr.length;

	// document.write(maxWater(arr,n));
	
 
    // O(N)

  
	
// 	let array = [3,0,2,0,4 ];
 
// 	console.log(findWater(5, array))
// 	// Method for maximum amount of water
// 	function findWater(n ,arr)
// 	{
	
// 		// left[i] contains height of tallest bar to the
// 		// left of i'th bar including itself
// 		let left = new Array(n);

// 		// Right [i] contains height of tallest bar to
// 		// the right of ith bar including itself
// 		let right = new Array(n);

// 		// Initialize result
// 		let water = 0;

// 		// Fill left array
// 		left[0] = arr[0];
// 		for (let i = 1; i < n; i++)
// 			left[i] = Math.max(left[i - 1], arr[i]);
//             //   [[3, 0, 2, 0 ,4 ];];
//       //  left = [ 3, 3 , 2, 2, 4 ]
// 		// Fill right array
// 		right[n - 1] = arr[n - 1];
// 		for (let i = n - 2; i >= 0; i--)
// 			right[i] = Math.max(right[i + 1], arr[i]);
//         //   [3, 0, 2, 0 ,  4  ];
//   //  right =[            , 4  ]
// 		// Calculate the accumulated water element by element
// 		// consider the amount of water on i'th bar, the
// 		// amount of water accumulated on this particular
// 		// bar will be equal to min(left[i], right[i]) - arr[i] .
// 		for (let i = 0; i < n; i++)
// 			water += Math.min(left[i] , right[i]) - arr[i];
//    //  left = [ 3,   3 , 2,  2, 4 ]
//    //  right =[ 3 ,  2,  2 , 4 ,4 ]
//    //          [3,   0,  2,  0, 4 ];
//    // water =   0 +  2 + 0  + 2 + 0 
// 		return water;
// 	}
 
// Python implementation of the approach

// Function to return the maximum
// water that can be stored
function maxWater(height){
	
	// Stores the indices of the bars
	let stack = []
	
	// size of the array
	let n = height.length
	
	// Stores the final result
	let ans = 0
	
	// Loop through the each bar
	for(let i=0;i<n;i++){
		
		// Remove bars from the stack
		// until the condition holds
		while(stack.length != 0 && (height[stack[stack.length-1]] < height[i]) ){
			
			// store the height of the top
			// and pop it.
			let pop_height = height[stack.pop()]
			
			// If the stack does not have any
			// bars or the popped bar
			// has no left boundary
			if(stack.length == 0)
				break
			
			// Get the distance between the
			// left and right boundary of
			// popped bar
			let distance = i - stack[stack.length - 1] - 1
			
			// Calculate the min. height
			let min_height =Math.min(height[stack[stack.length - 1]],height[i])-pop_height
			
			ans += distance * min_height
		}
		
		// If the stack is either empty or
		// height of the current bar is less than
		// or equal to the top bar of stack
		stack.push(i)
	}
	
	return ans
}

// Driver code
let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
document.write(maxWater(arr))
 


