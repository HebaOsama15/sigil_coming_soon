import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:lottie/lottie.dart';
import 'package:sigil_web_page/links.dart';

class NewCommingSoonPage extends StatelessWidget {
  const NewCommingSoonPage({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Color(0xFF020203),
      body: Padding(
        padding: EdgeInsets.symmetric(horizontal: 20.0.w),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            // SizedBox(
            //   height: 10.h,
            // ),
            Align(
              alignment: Alignment.topLeft,
              child: SvgPicture.asset(
                'assets/svg_images/star_icon.svg',
                height: 80.h,
              ),
              // (50.w, 60.h),
            ),
            // SizedBox(
            //   height: 50.h,
            // ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SvgPicture.asset(
                  'assets/svg_images/logo.svg',
                  width: 150.w,
                  height: 150.h,
                ),
                Padding(
                  padding: EdgeInsets.only(top: 35.0.h, left: 10.h),
                  child: SvgPicture.asset(
                    'assets/svg_images/film_rental.svg',
                    width: 50.w,
                    height: 50.h,
                  ),
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Stack(
                  clipBehavior: Clip.none,
                  alignment: Alignment.center,
                  children: [
                    SizedBox(
                      height: 200.h,
                      width: 200.w,
                      child: Lottie.asset(
                          'assets/svg_images/Glitch2.json'), //الدائرة الزرقاء
                    ),
                    Align(
                      alignment: Alignment(0.5, 0.5),
                      //  Alignment.topRight,
                      // right: -10.w,
                      child: 
                      SvgPicture.asset(
                        'assets/svg_images/Coming soon.svg',
                        height: 100.h,
                        width: 100.w,
                      ),
                    ),
                  ],
                ),
                Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Padding(
                    //   padding: const EdgeInsets.only(right: 50.0),
                    //   child: Flexible(child: const Accounts()),
                    // ),
                    SizedBox(height: 8.h),
                    Builder(
                      builder: (context) {
                        return FittedBox(
                          fit: BoxFit.scaleDown,
                          child: Text(
                            "Where the story begins. Follow us",
                            style: TextStyle(
                              fontSize: 7.5.spMin,
                              color: Colors.white,
                            ),
                          ),
                        );
                      },
                    ),
                  ],
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
