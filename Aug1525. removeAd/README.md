### Problem Description

<p>Given an array of strings <code>strArr</code>, remove all strings that contain the substring "ad", and return an array of the remaining strings while preserving their order. Please complete the function <code>solution</code> to do this.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>strArr</code> ≤ 1,000

<ul>
<li>1 ≤ length of each element in <code>strArr</code> ≤ 20</li>
<li>Each element of <code>strArr</code> is a string consisting of lowercase English letters.</li>
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
<td>["and","notad","abcd"]</td>
<td>["and","abcd"]</td>
</tr>
<tr>
<td>["there","are","no","a","ds"]</td>
<td>["there","are","no","a","ds"]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>The string at index 1, "notad", contains "ad" as a substring. Therefore, remove that string and keep the rest in order to return ["and","abcd"].</li>
</ul>

<p>Example #2</p>

<ul>
<li>No string contains "ad" as a substring. Therefore, return the original array as is.</li>
</ul>