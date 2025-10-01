### Problem Description

<p>Given an array of strings <code>strArr</code>, when every element consists only of alphabetic letters, complete the function <code>solution</code> that returns the array after converting all characters of strings at odd indices to uppercase and all characters of strings at even indices to lowercase.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>strArr</code> ≤ 20

<ul>
<li>1 ≤ length of each element in <code>strArr</code> ≤ 20</li>
<li>Each element of <code>strArr</code> is a string consisting of alphabetic letters.</li>
</ul></li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>strArr</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["AAA","BBB","CCC","DDD"]</td>
<td>["aaa","BBB","ccc","DDD"]</td>
</tr>
<tr>
<td>["aBc","AbC"]</td>
<td>["abc","ABC"]</td>
</tr>
</tbody>
      </table>
<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li><code>strArr[0]</code> and <code>strArr[2]</code> are strings at even indices, so they are converted to lowercase and become "aaa" and "ccc".</li>
<li><code>strArr[1]</code> and <code>strArr[3]</code> are strings at odd indices and are already uppercase, so they remain unchanged.</li>
<li>Therefore, return ["aaa","BBB","ccc","DDD"].</li>
</ul>

<p>Example #2</p>

<ul>
<li><code>strArr[0]</code> is a string at an even index, so it is converted to lowercase and becomes "abc".</li>
<li><code>strArr[1]</code> is a string at an odd index, so it is converted to uppercase and becomes "ABC".</li>
<li>Therefore, return ["abc","ABC"].</li>
</ul>