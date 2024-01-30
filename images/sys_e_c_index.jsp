<%@page contentType="text/html; charset=UTF-8" 
%><%@page import="webber.wbst.com.*" 
%><jsp:useBean id="sys" scope="session" class="webber.vsb.sys.VsbSys" 
/><jsp:useBean id="upage" scope="page" class="webber.wbst.com.Page" 
/><%if(!sys.pageProtect(request,response)) return;
%><%String _strMode = request.getParameter("_strMode");
if(_strMode == null)
{
    _strMode = (String)session.getAttribute("_strMode");
    if(_strMode == null || _strMode.equals(""))
    _strMode = "5";
}
int _mode_ = Integer.parseInt(_strMode);
%><%try{
%><%upage.init(request, response, out, _mode_, "","1667906616", "images|index.jsp", "");
%><%}catch(Exception e){out.print(e.toString());return;}
%><%if(upage.getPageBreak() == true) return;
%><%=upage.showSetDoctype("<!DOCTYPE HTML vsb_doctype>")%><%=upage.showOnPageLoading(true)%><!--olddoctypeHTML-->

<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html xmlns:tag vsb_seqid="0">
	<head vsb_seqid="1">
		<title vsb_seqid="2"><%=upage.getTitle()
%></title><%upage.putKeywordsMeta(out);
%>
		<meta charset="utf-8" vsb_seqid="3" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" vsb_seqid="4" />
		<link rel="stylesheet" href="assets/css/main.css" vsb_seqid="5" />
	<%upage.putAllViewStyle(out, null);
%></head>
	<body class="is-preload" vsb_seqid="6">

		<!-- Wrapper -->
			<div id="wrapper" vsb_seqid="7">

				<!-- Main -->
					<div id="main" vsb_seqid="8">
						<div class="inner" vsb_seqid="9">

							<!-- Header -->
								<header id="header" vsb_seqid="10">
									<a href="index.html" class="logo" vsb_seqid="11"><strong vsb_seqid="12">Hongfei Wang's Group</strong> </a>
								</header>

							<!-- Banner -->
								<section id="banner" vsb_seqid="13">
									<div class="content" vsb_seqid="14">
										<header vsb_seqid="15">
											<h2 vsb_seqid="16">Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h2>
											<p vsb_seqid="17">School of Science, Westlake University</p>
										</header>
										<p vsb_seqid="18">
											Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics, including but not limited to:<br vsb_seqid="19" />
											<ol vsb_seqid="20">
												<li vsb_seqid="21">Physical chemistry of surfaces and interfaces; structure, interaction and chemical dynamics</li>
												<li vsb_seqid="22">Spectroscopy and molecular reaction dynamics: vibration and electronic spectroscopy</li>
												<li vsb_seqid="23">Linear and nonlinear, spectroscopy and modern spectroscopic analysis methods : Infrared, Raman and sum frequency spectroscopy</li>
												<li vsb_seqid="24">Chirality and stereochemistry on surfaces and biofilms.</li>
											</ol>
										</p>
										<ul class="actions" vsb_seqid="25">
											<li vsb_seqid="26"><a href="research.html" class="button big" vsb_seqid="27">Learn More</a></li>
										</ul>
									</div>
									<span class="image object" vsb_seqid="28">
										<img src="images/5.jpg" alt="" vsb_seqid="29" />
									</span>
								</section>

						</div>
					</div>

				<!-- Sidebar -->
					<div id="sidebar" vsb_seqid="30">
						<div class="inner" vsb_seqid="31">

							<!-- Menu -->
								<nav id="menu" vsb_seqid="32">
									<header class="major" vsb_seqid="33">
										<h2 vsb_seqid="34">Menu</h2>
									</header>
									<ul vsb_seqid="35">
										<li vsb_seqid="36"><a href="index.html" vsb_seqid="37">Homepage</a></li>
										<li vsb_seqid="38"><a href="member.html" vsb_seqid="39">People</a></li>
										<li vsb_seqid="40"><a href="research.html" vsb_seqid="41">Research</a></li>
										<li vsb_seqid="42"><a href="news.html" vsb_seqid="43">News</a></li>
										<li vsb_seqid="44"><a href="publications.html" vsb_seqid="45">Publications</a></li>
										<li vsb_seqid="46"><a href="contact.html" vsb_seqid="47">Contact</a></li>
									</ul>
								</nav>

							<!-- Footer -->
								<footer id="footer" vsb_seqid="48">
									<p class="copyright" vsb_seqid="49"><a href="http://www.westlake.edu.cn" vsb_seqid="50">Westlake University</a>. All rights reserved. </br>
										Design: <a href="https://html5up.net" vsb_seqid="51">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div>

			</div>

		<!-- Scripts -->
			<%
upage.showScript("<script src=\"assets/js/jquery.min.js\" vsb_seqid=\"52\"></script>");
%>
			<%
upage.showScript("<script src=\"assets/js/browser.min.js\" vsb_seqid=\"53\"></script>");
%>
			<%
upage.showScript("<script src=\"assets/js/breakpoints.min.js\" vsb_seqid=\"54\"></script>");
%>
			<%
upage.showScript("<script src=\"assets/js/util.js\" vsb_seqid=\"55\"></script>");
%>
			<%
upage.showScript("<script src=\"assets/js/main.js\" vsb_seqid=\"56\"></script>");
%>

	<%upage.showScript("<script language='JavaScript'>parent.DomSelector.loadSelector()</script>");%></body>
</html>
<%upage.onPageEnd();%><%=upage.showOnPageLoaded(true)%>