### Problem Description

<p>Given a string array <code>my_strings</code> and a two-dimensional integer array <code>parts</code> of the same length as parameters, <code>parts[i]</code> is of the form [s, e] and represents the substring of <code>my_string[i]</code> from index s to index e. Please write the function <code>solution</code> that returns the string formed by concatenating, in order, the substrings specified by <code>parts</code> for each element of <code>my_strings</code>.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>my_strings</code> = length of <code>parts</code> ≤ 100</li>
<li>1 ≤ length of each element in <code>my_strings</code> ≤ 100</li>
<li>Given <code>parts[i]</code> = [s, e], the following holds:

<ul>
<li>0 ≤ s ≤ e &lt; length of <code>my_strings[i]</code></li>
</ul></li>
</ul>

<hr>

<h5>Input/Output Example</h5>
<table class="table">
        <thead><tr>
<th>my_strings</th>
<th>parts</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["progressive", "hamburger", "hammer", "ahocorasick"]</td>
<td>[[0, 4], [1, 2], [3, 5], [7, 7]]</td>
<td>"programmers"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li><p>The input of Example 1 can be presented in a readable table as follows.</p>
<table class="table">
        <thead><tr>
<th>i</th>
<th>my_strings[i]</th>
<th>parts[i]</th>
<th>substring</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td>"progressive"</td>
<td>[0, 4]</td>
<td>"progr"</td>
</tr>
<tr>
<td>1</td>
<td>"hamburger"</td>
<td>[1, 2]</td>
<td>"am"</td>
</tr>
<tr>
<td>2</td>
<td>"hammer"</td>
<td>[3, 5]</td>
<td>"mer"</td>
</tr>
<tr>
<td>3</td>
<td>"ahocorasick"</td>
<td>[7, 7]</td>
<td>"s"</td>
</tr>
</tbody>
      </table>
<p>The string obtained by concatenating each substring in order is "programmers". Therefore, return "programmers".</p></li>
</ul>
