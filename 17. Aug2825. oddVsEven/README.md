### Problem Description

<p>Given an integer list <code>num_list</code>, treating the first element as the 1st element, complete the function <code>solution</code> to return the larger of the sum of elements at odd positions and the sum of elements at even positions. If the two sums are equal, return that value.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>5 ≤ length of <code>num_list</code> ≤ 50</li>
<li>-9 ≤ each element of <code>num_list</code> ≤ 9</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>num_list</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[4, 2, 6, 1, 7, 6]</td>
<td>17</td>
</tr>
<tr>
<td>[-1, 2, 5, 6, 3]</td>
<td>8</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>The sum of elements at odd positions is 4 + 6 + 7 = 17, and the sum of elements at even positions is 2 + 1 + 6 = 9, so return 17.</li>
</ul>

<p>Example #2</p>

<ul>
<li>The sum of elements at odd positions is -1 + 5 + 3 = 7, and the sum of elements at even positions is 2 + 6 = 8, so return 8.</li>
</ul>