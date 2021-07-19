/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Before we go on, we need to look at the given test cases, and make some facts up to start writing our code:

- We can see that the area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations
- The area of a container is (right - left) multiplied by the smallestSide.
- If the area is greater than our result, we have a new result
- When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side
- With this we can do the problem in O(n) time and constant space by having a left and right pointer, and moving these pointers inward.
*/

let height = [1,8,6,2,5,4,8,3,7]

console.log(findArea(height));

function findArea (height) {
	let result = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		let smallestSide = Math.min(height[left], height[right]);
		let area = (right - left) * smallestSide;

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
	}

	return result;
}
