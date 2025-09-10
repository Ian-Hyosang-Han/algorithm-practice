### Problem Description

<p>Write a function <code>solution</code> that returns an array containing the elements of <code>arr</code> that are divisible by <code>divisor</code>, sorted in ascending order.<br>
If there are no elements divisible by <code>divisor</code>, return an array containing -1.</p>

<h5>Constraints</h5>

<ul>
<li><code>arr</code> is an array containing natural numbers.</li>
<li>For integers i and j, if i ≠ j then arr[i] ≠ arr[j].</li>
<li><code>divisor</code> is a natural number.</li>
<li><code>arr</code> is an array with length ≥ 1.</li>
</ul>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>divisor</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>[5, 9, 7, 10]</td>
<td>5</td>
<td>[5, 10]</td>
</tr>
<tr>
<td>[2, 36, 1, 3]</td>
<td>1</td>
<td>[1, 2, 3, 36]</td>
</tr>
<tr>
<td>[3, 2, 6]</td>
<td>10</td>
<td>[-1]</td>
</tr>
</tbody>
      </table>
<h5>Example Explanation</h5>

<p>Example #1<br>
Among the elements of <code>arr</code>, 5 and 10 are divisible by 5. Therefore, return [5, 10].</p>

<p>Example #2<br>
All elements of <code>arr</code> are divisible by 1. Sort them in ascending order and return [1, 2, 3, 36].</p>

<p>Example #3<br>
3, 2, and 6 are not divisible by 10. Since there are no divisible elements, return [-1].</p>
