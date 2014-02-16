canvas_barchart
===============

A JS/Canvas barchart library



Usage
=====

var names = ["Turon", "Pasta", "Besitos", "Regalos", "Carbon"];
var colors = ["#ECD078", "#D95B43", "#C02942", "#54A4E7", "#53777A"];
var values = [7, 3, 2, 2, 1];

var data = [ names, values, colors ];

var canvas = document.getElementById("chart-canvas")
var bar_chart = new BarChart(canvas, data);
