var nodeList = [
    {
        "nodeContent": "��ҳ",
        "collapsed": "",
        "nodes": [
            {
                "nodeContent": "�������",
                "collapsed": "",
                "nodes": [
                    {
                        "nodeContent": "Scroll",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "ģ�������",
                                "collapsed": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "�ص�����",
                                "collapsed": "",
                                "nodes": []
                            },
                            {
                                nodeContent: "Fixed <div>" +
                                    "<a href='#' class='btn-add' style='color:#fff'>���</a> | <a class='btn-del' style='color:#fff' href='#'>ɾ��</a></div>",
                                collapsed: "",
                                eleStyle:"background:#5A3022;color:#fff;",
                                clientFn:function(node){
                                    var ele=node.nodeEle,
                                        newNode={
                                            "nodeContent": "node",
                                            "className": "",
                                            "nodes": []
                                        };
                                    $(ele).find(".btn-add").on("click",function(e){
                                        node.addNode(newNode);
                                        e.stopPropagation();
                                    });
                                    $(ele).find(".btn-del").on("click",function(e){
                                        node.remove();
                                        e.stopPropagation();
                                    });
                                },
                                nodes: []
                            }
                        ]
                    },
                    {
                        "nodeContent": "��ý��",
                        "collapsed": "",
                        "nodes": [
                            {
                                "nodeContent": "ͼƬ",
                                "collapsed": "",
                                eleStyle:"background:#f7f7f7 url('img/raspberry.jpg')",
                                "nodes": [
                                    {
                                        "nodeContent": "Slider",
                                        "collapsed": "",
                                        "nodes": [
                                            {
                                                "nodeContent": "2D�л�",
                                                "collapsed": "",
                                                "nodes": []
                                            }, {
                                                "nodeContent": "3D�л�",
                                                "collapsed": "",
                                                "nodes": []
                                            }
                                        ]
                                    },
                                    {
                                        "nodeContent": "ͼƬ�༭",
                                        "collapsed":true,
                                        "nodes": [
                                            {
                                                "nodeContent": "��ת",
                                                "collapsed": "",
                                                "nodes": []
                                            }, {
                                                "nodeContent": "����",
                                                "style": "background:#fff",
                                                "nodes": []
                                            },
                                            {
                                                "nodeContent": "�Ŵ�",
                                                "collapsed": "",
                                                "nodes": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeContent": "UI���",
                "className": "",
                "nodes": [
                    {
                        "nodeContent": "ҵ�����",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "�����¼��",
                                "className": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "������",
                                "className": "",
                                "nodes": []
                            }
                        ]
                    },
                    {
                        "nodeContent": "BUtton",
                        "className": "",
                        "nodes": []
                    },
                    {
                        "nodeContent": "SelectBox",
                        "className": "",
                        "nodes": [
                            {
                                "nodeContent": "ģ��������",
                                "className": "",
                                "nodes": []
                            },
                            {
                                "nodeContent": "��������",
                                "className": "",
                                "nodes": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];