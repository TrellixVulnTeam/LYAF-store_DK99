import {Filter} from "../Filter.js"


var G_currentInput = {
    name: "",
    desc: "",
    price: null,
    category: null,
    productID: null,
    color: null,
    size: null,
    images: null,
    thumbnails: null,
  };
  
  const colorList = [
    {
      name: "Đỏ",
      _id: "R",
      colorImage: "color-red.jpg",
    },
    {
      name: "Đen",
      _id: "B",
      colorImage: "color-black.jpg",
    },
    {
      name: "Camo rêu",
      _id: "CR",
      colorImage: "color-camo-green.jpg",
    },
    {
      name: "Camo xám",
      _id: "CX",
      colorImage: "color-camo-grey.jpg",
    },
    {
      name: "Caro đen",
      _id: "CRB",
      colorImage: "color-caro-black.jpg",
    },
    {
      name: "Caro vàng",
      _id: "CRY",
      colorImage: "color-caro-yellow.jpg",
    },
    {
      name: "Camo xanh",
      _id: "CXA",
      colorImage: "color-camo-blue.jpg",
    },
  ];
  
  const sizeList = [
    {
      name: "XXS",
      _id: "XXS",
      desc: "Rất rất nhỏ",
    },
    {
      name: "XS",
      _id: "XS",
      desc: "Rất nhỏ",
    },
    {
      name: "S",
      _id: "S",
      desc: "Nhỏ",
    },
    {
      name: "M",
      _id: "M",
      desc: "Trung bình",
    },
    {
      name: "L",
      _id: "L",
      desc: "Lớn",
    },
    {
      name: "XL",
      _id: "XL",
      desc: "Rất lớn",
    },
    {
      name: "XXL",
      _id: "XXL",
      desc: "Rất rất lớn",
    },
  ];
  
  const categoryList = [
    {
      name: "Áo",
      _id: "A",
      child: ["AT", "ASM", "AK", "AH", "AL", "AP"],
    },
    {
      name: "Áo Thun",
      _id: "AT",
      parent: "A",
    },
    {
      name: "Áo Sơ mi",
      _id: "ASM",
      parent: "A",
    },
    {
      name: "Áo khoác",
      _id: "AK",
      parent: "A",
    },
    {
      name: "Áo Hoodie",
      _id: "AH",
      parent: "A",
    },
    {
      name: "Áo len",
      _id: "AL",
      parent: "A",
    },
    {
      name: "Áo polo",
      _id: "AP",
      parent: "A",
    },
    {
      name: "Quần",
      _id: "Q",
      child: ["QJ", "QT", "QS"],
    },
    {
      name: "Quần jean",
      _id: "QJ",
      parent: "Q",
    },
    {
      name: "Quần tây",
      _id: "QT",
      parent: "Q",
    },
    {
      name: "Quần short",
      _id: "QS",
      parent: "Q",
    },
    {
      name: "Giày, dép",
      _id: "GD",
      child: ["GS","GT","DK"],
    },
    {
      name: "Giày sandal",
      _id: "GS",
      parent: "GD",
    },
    {
      name: "Giày thể thao",
      _id: "GT",
      parent: "GD",
    },
    {
      name: "Dép kẹp",
      _id: "DK",
      parent: "GD",
    },
  ];
  
  const myProducts = [
    {
      id: "ANS1001",
      name: "Áo Sơmi",
      thumbnail: "ATNS1002-1.jpg",
      category: {
        name: "Áo",
        _id: "A",
        child: {
          name: "Áo Sơ mi",
          _id: "ASM",
          parent: "A",
        },
      },
      size: [
        {
          name: "XXS",
          _id: "XXS",
          desc: "Rất rất nhỏ",
        },
        {
          name: "XS",
          _id: "XS",
          desc: "Rất nhỏ",
        },
        {
          name: "S",
          _id: "S",
          desc: "Nhỏ",
        },
        {
          name: "M",
          _id: "M",
          desc: "Trung bình",
        },
        {
          name: "L",
          _id: "L",
          desc: "Lớn",
        },
        {
          name: "XL",
          _id: "XL",
          desc: "Rất lớn",
        },
        {
          name: "XXL",
          _id: "XXL",
          desc: "Rất rất lớn",
        },
      ],
      color: [
        {
          name: "Đỏ",
          _id: "R",
          colorImage: "color-red.jpg",
        },
        {
          name: "Đen",
          _id: "B",
          colorImage: "color-black.jpg",
        },
        {
          name: "Camo rêu",
          _id: "CR",
          colorImage: "color-camo-green.jpg",
        },
        {
          name: "Camo xám",
          _id: "CX",
          colorImage: "color-camo-grey.jpg",
        },
        {
          name: "Caro đen",
          _id: "CRB",
          colorImage: "color-caro-black.jpg",
        },
        {
          name: "Caro vàng",
          _id: "CRY",
          colorImage: "color-caro-yellow.jpg",
        },
        {
          name: "Camo xanh",
          _id: "CXA",
          colorImage: "color-camo-blue.jpg",
        },
      ],
      price: 200,
      quantity: 200,
      rate: 3,
    },
    {
      id: "ANS1001",
      name: "Áo thun",
      thumbnail: "ATNS1003-1.jpg",
      category: {
        name: "Áo",
        _id: "A",
        child: {
          name: "Áo Thun",
          _id: "AT",
          parent: "A",
        },
      },
      size: [
        {
          name: "XS",
          _id: "XS",
          desc: "Rất nhỏ",
        },
        {
          name: "S",
          _id: "S",
          desc: "Nhỏ",
        },
        {
          name: "M",
          _id: "M",
          desc: "Trung bình",
        },
        {
          name: "L",
          _id: "L",
          desc: "Lớn",
        },
      ],
      color: [
        {
          name: "Đen",
          _id: "B",
          colorImage: "color-black.jpg",
        },
        {
          name: "Camo rêu",
          _id: "CR",
          colorImage: "color-camo-green.jpg",
        },
        {
          name: "Camo xám",
          _id: "CX",
          colorImage: "color-camo-grey.jpg",
        },
        {
          name: "Caro đen",
          _id: "CRB",
          colorImage: "color-caro-black.jpg",
        },
        {
          name: "Camo xanh",
          _id: "CXA",
          colorImage: "color-camo-blue.jpg",
        },
      ],
      price: 250,
      quantity: 500,
      rate: 4.5,
    },
  ];
  
  const parseToElements = (obj) => {
    var check = `<input id='list-product-check' type='checkbox'>`;
    var productDetail = `<div id="list-product-detail">
                          <img id="list-product-thumbail" src='./img/${
                            obj.thumbnail
                          }'>
                          <div id="list-product-info">
                              <span id="list-product-name">${obj.name}</span>
                              <span id="list-product-size">${obj.size
                                .map((_) => _.name)
                                .toString()}</span>
                          </div>
                        </div>`;
    var id = obj.id;
    var categories =
      obj.category.name +
      (obj.category.child ? ", " + obj.category.child.name : "");
    var color = `<div id="color-wrapper">
                  ${obj.color
                    .map(
                      (_) =>
                        `<img title='${_.name}' id='list-product-color' src='./img/${_.colorImage}'>`
                    )
                    .join(" ")}
                </div>`;
    var price = `${obj.price}.000 VNĐ`;
    var quantity = `${obj.quantity} Cái`;
    var rateStar = [];
    for (var i = 0; i < 5; i++) {
      if (obj.rate - i >= 1) {
        rateStar.push('<span><i class="fas fa-star"></i></span>');
      } else if (obj.rate - i > 0 && obj.rate - i < 1) {
        rateStar.push('<span><i class="fas fa-star-half-alt"></i></span>');
      } else {
        rateStar.push('<span><i class="far fa-star"></i></span>');
      }
    }
    var rate = ` <div id='list-product-rating'>
                  <div id="rating-star">
                    ${rateStar.map((_) => _).join(" ")}
                  </div>
                  <div id="rating-value">
                    <span>${obj.rate}/5</span>
                  </div>
                </div>`;
    var action = ` <div id="list-product-action">
                    <div class="btn-group dropup">
                      <button type="button" class="btn btn-outline-secondary">
                        Edit
                      </button>
                      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Remove</a>
                        <a class="dropdown-item" href="#">Detail</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                  </div>`;
    return {
      check,
      productDetail,
      id,
      categories,
      color,
      price,
      quantity,
      rate,
      action,
    };
  };
  
  const productList = myProducts.map((_) => parseToElements(_));
  

$(document).ready(()=>{
  var filters = new Filter("aaaa",{
    data:[{
        property: "id",
        title: "ID",
        type: "text"
    },{
        property: "name",
        title: "Name",
        type: "text"
    },{
        property: "price",
        title: "Price",
        type: "number"
    },{
        property: "category",
        title: "Category",
        type: "category"
    },{
        property: "color",
        title: "Color",
        type: "category"
    },{
        property: "quantity",
        title: "Stock",
        type: "number"
    },{
        property: "rate",
        title: "Rate",
        type: "number"
    },{
        property: "size",
        title: "Size",
        type: "category"
    }],
    submit: function() {
      console.log(this.tags)
      $(".LYAF-product-list .LYAF-table-loading").show()
      setTimeout(() => {
        $(".LYAF-product-list .LYAF-table-loading").hide()
      }, 300);
    }, sizeList, colorList, categoryList})

  // DATATABLE
  if ($("#LYAF-list")[0]) {
    var columns = [
      {
        title: "Check",
        data: "check",
      },
      {
        title: "Product Details",
        data: "productDetail",
      },
      {
        title: "ID",
        data: "id",
      },
      {
        title: "Categories",
        data: "categories",
      },
      {
        title: "Color",
        data: "color",
      },
      {
        title: "Price",
        data: "price",
      },
      {
        title: "Stock",
        data: "quantity",
      },
      {
        title: "Rate",
        data: "rate",
      },
      {
        title: "Action",
        data: "action",
      },
    ];

    var t = $("#LYAF-list").DataTable({
      responsive: true,
      data: productList,
      columns,
      columnDefs: [{ orderable: false, targets: 0 }],
    });

    $("#LYAF-list #list-product-color").hover(
      function (e) {
        if (!$(".LYAF-popup-info").is(":visible")) {
          $(".LYAF-popup-info").append(`<img src='${$(this).attr("src")}'>`);
          $(".LYAF-popup-info").css("left", e.pageX + "px");
          $(".LYAF-popup-info").css("top", e.pageY + "px");
          $(".LYAF-popup-info").show();
        }
      },
      function () {
        if ($(".LYAF-popup-info").is(":visible")) {
          $(".LYAF-popup-info img").remove();
          $(".LYAF-popup-info").hide();
        }
      }
    );
      var tableTrs = $(`.LYAF-product-list #LYAF-list tbody tr`)
      tableTrs.each(function() {
        var tds = $(this).find(`td:not([style*="display: none"])`)
        if (tds.length === 1){
          tds.css("border-radius","20px")
        }else{
          $(tds[0]).css("border-radius","20px 0 0 20px")
          $(tds[tds.length-1]).css("border-radius", "0 20px 20px 0")
        }
      })
  }
})