### Problem Description

<p>Given a list of strings, when all strings are concatenated in order, the resulting string is called the tail string. When creating the tail string, we want to exclude any strings that contain a specific substring. For example, if the string list is ["abc", "def", "ghi"] and we exclude strings containing "ef", the resulting tail string will be "abcghi".</p>

<p>When you are given a string list <code>str_list</code> and a string <code>ex</code> to exclude, complete the function <code>solution</code> to return the tail string created by excluding any strings from <code>str_list</code> that contain <code>ex</code>.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>2 ≤ <code>str_list</code> length ≤ 10</li>
<li>1 ≤ length of each element in <code>str_list</code> ≤ 10</li>
<li>1 ≤ length of <code>ex</code> ≤ 5</li>
</ul>

<hr>

<h5>Example Input/Output</h5>
<table class="table">
        <thead><tr>
<th>str_list</th>
<th>ex</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["abc", "def", "ghi"]</td>
<td>"ef"</td>
<td>"abcghi"</td>
</tr>
<tr>
<td>["abc", "bbc", "cbc"]</td>
<td>"c"</td>
<td>""</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>Same as described in the problem statement.</li>
</ul>

<p>Example #2</p>

<ul>
<li>All strings in the list contain "c", so an empty string is returned.</li>
</ul>