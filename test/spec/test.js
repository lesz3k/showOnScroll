/* tests showOnScroll */
    var testRevealOnScroll = new showOnScroll();
    
    for (var i = 1; i < 6; i++) {
        $('body').append(
            '<div id="test' + i + '"> </div>'
        )
    }
    var t1 = $('#test1'),
        t2 = $('#test2'),
        t3 = $('#test3'),
        t4 = $('#test4');

    describe('showOnScroll', function () {

        describe('#obj', function () {
            it('should return object', function () {
                expect(testRevealOnScroll).to.exist;
            })
            it('should have transition property', function () {
                expect(testRevealOnScroll.transition).to.be.ok;

            })
        })
        
        describe('#transition', function () {

            it('should be invisible if elem is below window height', function () {
                $('#test4').css('margin-top', window.outerHeight);
                testRevealOnScroll.run(t4);
                expect($('#test4').css('visibility')).to.equal('visible');
            });

            it('should be visible if elem is in window height', function () {
                testRevealOnScroll.run(t4);
                expect($('#test4').css('visibility')).to.equal('visible');
            });

            it('should have timing set to linear by default', function () {
                expect(testRevealOnScroll.transition.timing).to.equal('linear');
            })

            it('should have the proper transition duration set', function () {
                testRevealOnScroll.transition.duration = '5s';
                testRevealOnScroll.run(t1);
                assert($('#test1').css('transition-duration') === '5s');
            });

            it('should work with multiple elements passed', function () {
                testRevealOnScroll.transition.delay = '1s';
                testRevealOnScroll.run(t2, t3, t4);
                assert(t3.css('transition-delay') === '1s');
            });

        });
    });
