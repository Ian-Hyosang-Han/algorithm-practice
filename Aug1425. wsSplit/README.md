### Problem Description

<p>Given a string <code>my_string</code> where words are separated by a single space, write a function <code>solution</code> that returns an array of strings containing the words in left-to-right order.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li><code>my_string</code> consists only of lowercase English letters and spaces.</li>
<li>1 ≤ length of <code>my_string</code> ≤ 1,000</li>
<li>The first and last characters of <code>my_string</code> are not spaces.</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"i love you"</td>
<td>["i", "love", "you"]</td>
</tr>
<tr>
<td>"programmers"</td>
<td>["programmers"]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>For <code>my_string</code> = "i love you", the words separated by a single space are "i", "love", and "you". Therefore, return ["i", "love", "you"].</li>
</ul>

<p>Example #2</p>

<ul>
<li>For <code>my_string</code> = "programmers", there is only one word. Therefore, return ["programmers"].</li>
</ul>