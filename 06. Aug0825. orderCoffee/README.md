### Problem Description

<p>Ethan, the youngest member of the team, plans to buy coffee for his teammates from a café that sells only Americano and Café Latte. Regardless of whether the drink is iced or hot, the prices are 4,500 won for Americano and 5,000 won for Café Latte. When collecting orders, if a team member writes only the menu name without specifying hot/iced, it will be ordered as iced by default, and if a team member writes "anything," it will be replaced with an iced Americano.</p>

<p>Given a string array <code>order</code> representing each employee’s request, write a function <code>solution</code> that returns the total amount to be paid at the café. The elements of <code>order</code> will only be one of the following, and their meanings are as follows.</p>
<table class="table">
        <thead><tr>
<th>Element of <code>order</code></th>
<th>Meaning</th>
</tr>
</thead>
        <tbody><tr>
<td>"iceamericano", "americanoice"</td>
<td>Iced Americano</td>
</tr>
<tr>
<td>"hotamericano", "americanohot"</td>
<td>Hot Americano</td>
</tr>
<tr>
<td>"icecafelatte", "cafelatteice"</td>
<td>Iced Café Latte</td>
</tr>
<tr>
<td>"hotcafelatte", "cafelattehot"</td>
<td>Hot Café Latte</td>
</tr>
<tr>
<td>"americano"</td>
<td>Americano (iced by default)</td>
</tr>
<tr>
<td>"cafelatte"</td>
<td>Café Latte (iced by default)</td>
</tr>
<tr>
<td>"anything"</td>
<td>Anything → Iced Americano</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>order</code> ≤ 1,000</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>order</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["cafelatte", "americanoice", "hotcafelatte", "anything"]</td>
<td>19000</td>
</tr>
<tr>
<td>["americanoice", "americano", "iceamericano"]</td>
<td>13500</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Explanation</h5>

<p>Example #1</p>

<ul>
<li><p>The input for Example 1 can be organized in the following table.</p>
<table class="table">
        <thead><tr>
<th>order[i]</th>
<th>Written by team member</th>
<th>Actual ordered drink</th>
</tr>
</thead>
        <tbody><tr>
<td>"cafelatte"</td>
<td>Café Latte</td>
<td>Iced Café Latte</td>
</tr>
<tr>
<td>"americanoice"</td>
<td>Iced Americano</td>
<td>Iced Americano</td>
</tr>
<tr>
<td>"hotcafelatte"</td>
<td>Hot Café Latte</td>
<td>Hot Café Latte</td>
</tr>
<tr>
<td>"anything"</td>
<td>Anything</td>
<td>Iced Americano</td>
</tr>
</tbody>
      </table>
<p>Cheolsu orders two iced Americanos, one iced Café Latte, and one hot Café Latte, so the total payment is 4500 &times; 2 + 5000 &times; 2 = 19000 won. Therefore, the function returns 19000.</p></li>
</ul>

<p>Example #2</p>

<ul>
<li>In Example 2, all drinks end up being iced Americanos. Therefore, the total payment is 4500 &times; 3 = 13500 won, and the function returns 13500.</li>
</ul>