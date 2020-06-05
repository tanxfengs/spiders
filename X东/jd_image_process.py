import cv2
def FindPic(target, template):
    """
    找出图像中最佳匹配位置
    :param target: 目标即背景图
    :param template: 模板即需要找到的图
    :return: 返回最佳匹配及其最差匹配和对应的坐标
    """
    target_rgb = cv2.imread(target)
    target_gray = cv2.cvtColor(target_rgb, cv2.COLOR_BGR2GRAY)
    template_rgb = cv2.imread(template, 0)
    res = cv2.matchTemplate(target_gray, template_rgb, cv2.TM_CCOEFF_NORMED)
    value = cv2.minMaxLoc(res)
    print(value)
    # 返回一个数组形如（-0.3， 0.95， （121,54），（45， 543））元组四个元素，分别是最小匹配概率、最大匹配概率，最小匹配概率对应坐标，最大匹配概率对应坐标。

if __name__ == "__main__":
    FindPic("./bg.png", "./target.png")